<?php
/**
 * A field type for YouTube videos
 *
 * version 1.2
 *
 * @package default
 * @author Drew McLellan
 */
class PerchFieldType_youtube extends PerchAPI_FieldType
{
    
    private $api_url = 'http://gdata.youtube.com/feeds/api/videos/';
    

    /**
     * Output the form fields for the edit page
     *
     * @param array $details 
     * @return void
     * @author Drew McLellan
     */
    public function render_inputs($details=array())
    {
        $id = $this->Tag->input_id();
        $val = '';
        
        if (isset($details[$id]) && $details[$id]!='') {
            $json = $details[$id];
            $val  = $json['path']; 
        }else{
            $json = array();
        }
        
        $s = $this->Form->text($this->Tag->input_id(), $val);
        
        if (isset($json['youtubeID'])) {
            $ratio = 0.666666666;
            if (isset($json['height']) && $json['height']>0 && isset($json['width']) && $json['width']>0) {
                $ratio = $json['height'] / $json['width'];    
            }
            $w = 320;
            $h = $w*$ratio;
            $s.= '<div class="preview"><iframe width="'.$w.'" height="'.$h.'" src="http://www.youtube.com/embed/'.$json['youtubeID'].'" frameborder="0"></iframe></div>';
        }
        
        return $s;
    }
    
    
    /**
     * Read in the form input, prepare data for storage in the database.
     *
     * @param string $post 
     * @param object $Item 
     * @return void
     * @author Drew McLellan
     */
    public function get_raw($post=false, $Item=false) 
    {
        $store = array();
                
        $id = $this->Tag->id();

        if ($post===false) {
            $post = $_POST;
        }
        
        if (isset($post[$id])) {
            $this->raw_item = trim($post[$id]);
            $url = $this->raw_item;
        }
        
		if ($url) {
	        $store['path'] = $url;
	        $store['youtubeID'] = $this->get_id($url);
        
	        $details = $this->get_details($store['youtubeID']);
        
	        if ($details) {
	            $store = array_merge($store, $details);
	            $store['_title'] = $store['title'];
	        }
		}
        

        
        return $store;
    }
    
    /**
     * Take the raw data input and return process values for templating
     *
     * @param string $raw 
     * @return void
     * @author Drew McLellan
     */
    public function get_processed($raw=false)
    {    
        if (is_array($raw)) {
            
            $item = $raw;
            
            
            if ($this->Tag->output() && $this->Tag->output()!='path') {
                switch($this->Tag->output()) {        

                    case 'id':
                        return isset($item['youtubeID']) ? $item['youtubeID'] : false;
                        break;

                    case 'embed':
                        $w = $item['width'];
                        $h = $item['height'];

                        if ($this->Tag->width()) {
                            $w = $this->Tag->width();
                            $h = '';

                            if ($this->Tag->height()) {
                                $h = $this->Tag->height();
                            }else{
                                $ratio = $item['height'] / $item['width'];
                                $h = $w*$ratio;
                            }
                        }

                        return '<iframe width="'.$w.'" height="'.$h.'" src="http://www.youtube.com/embed/'.$item['youtubeID'].'" frameborder="0" allowfullscreen></iframe>';
                        break;

                    default:
                        if (isset($item[$this->Tag->output()])) {
                            return $item[$this->Tag->output()];
                        }
                        break;
                }
            }
    
            return $item['path'];
        }
        return $raw;
    }
    
    /**
     * Get the value to be used for searching
     *
     * @param string $raw 
     * @return void
     * @author Drew McLellan
     */
    public function get_search_text($raw=false)
    {
        if ($raw===false) $raw = $this->get_raw();
        if (!PerchUtil::count($raw)) return false;

        if (isset($raw['title'])) return $raw['title'];

		return false;
    }
    
    
    
    
	
	
	/**
	 * Finds the YouTube video ID from a YouTube URL
	 *
	 * @param string $url YouTube video page URL
	 * @return string YouTube ID
	 * @author Drew McLellan
	 */
    private function get_id($url)
	{
        $parsed_url = parse_url($url);

        if ($parsed_url) {
            $query  = (isset($parsed_url['query']) ? $parsed_url['query'] : false);
            $host   = (isset($parsed_url['host']) ? $parsed_url['host'] : false);

            switch($host) {

                case 'youtu.be':
                    $parts = explode('/', trim($parsed_url['path'], '/'));
                    return $parts[0];
                    break;

                default:
                    if ($query) {
                        parse_str($query, $parts);
                        if (is_array($parts) && isset($parts['v'])) {
                            return $parts['v'];
                        } 
                    }
                    break;
            }
        }
	
		
		return false;
	}
	
	
	/**
	 * Get information about the video with the given ID.
	 *
	 * @param string $videoID A YouTube video ID
	 * @return array Assoc array of video details
	 * @author Drew McLellan
	 */
	private function get_details($videoID)
	{
		$url = $this->api_url . $videoID;
		
		$ch 	= curl_init();
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_TIMEOUT, 10);
		curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
		$xml_string = curl_exec($ch);
		curl_close($ch);
		
		if ($xml_string) {
            PerchUtil::debug(PerchUtil::html($xml_string));
			$xml = simplexml_load_string($xml_string);
			
            $c        = $xml->xpath('*/media:content[@type="application/x-shockwave-flash"]');
            $images   = $xml->xpath('*/media:thumbnail');
            $rating   = $xml->xpath('gd:rating');
            $views    = $xml->xpath('yt:statistics');
            $duration = $xml->xpath('*/yt:duration');
			
			if (PerchUtil::count($c)) {
			    $out = array();
                $out['title']       = strval($xml->title);
                $out['description'] = strval($xml->content);
                $out['user_name']   = strval($xml->author->name);
                $out['user_url']    = strval($xml->author->uri);
                $out['url']         = strval($c[0]['url']);
                $out['date']        = date('Y-m-d H:i:s', strtotime(strval($xml->published)));
                
                if (PerchUtil::count($images)) {
                    $out['thumb']       = strval($images[0]['url']);    
                    $out['thumb_w']       = strval($images[0]['width']);    
                    $out['thumb_h']       = strval($images[0]['height']);    
                }

                if (PerchUtil::count($rating)) {
                    $out['rating']      = strval($rating[0]['average']);
                }

                if (PerchUtil::count($views)) {
                    $out['views']      = strval($views[0]['viewCount']);
                }
                
                if (PerchUtil::count($duration)) {
                    $out['duration']    = strval($duration[0]['seconds']);
                }

                // get width and height
                $url    = 'http://www.youtube.com/oembed?url=https://www.youtube.com/watch?v='.$videoID.'&format=json';
                $ch     = curl_init();
                curl_setopt($ch, CURLOPT_URL, $url);
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                curl_setopt($ch, CURLOPT_TIMEOUT, 10);
                curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
                $json = curl_exec($ch);
                curl_close($ch);

                if($json) {
                    $item = PerchUtil::json_safe_decode($json, true);

                    if ($item['width']) {
                        $out['width'] = $item['width'];
                    }
                    
                    if ($item['height']) {
                        $out['height'] = $item['height'];
                    }

                }
                
		
    			return $out;
    		}
		}
		
		return false;
	}


}

?>