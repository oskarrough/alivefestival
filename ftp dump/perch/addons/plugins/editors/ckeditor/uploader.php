<?php
    # include the API
    include('../../../../core/inc/api.php');

    $file       = $_FILES['upload']['name'];
    $filesize   = $_FILES['upload']['size'];
    $funcNum    = $_GET['CKEditorFuncNum'];


    /* -------- GET THE RESOURCE BUCKET TO USE ---------- */
    $bucket_name  = 'default';

    if (isset($_GET['bucket'])) {
        $bucket_name = $_GET['bucket'];
    }

    $Perch = Perch::fetch();
    $bucket = $Perch->get_resource_bucket($bucket_name);

    if ($bucket) PerchUtil::initialise_resource_bucket($bucket);

    // test to see if image folder is writable
    $bucket_writable = is_writable($bucket['file_path']);




    //if the file is greater than 0, process it into resources
    if($filesize > 0) {
    	
    	if ($bucket_writable && isset($file)) {
        	$filename = PerchUtil::tidy_file_name($file);
            if (strpos($filename, '.php')!==false) $filename .= '.txt'; // diffuse PHP files
            $target = PerchUtil::file_path($bucket['file_path'].'/'.$filename);


            if (file_exists($target)) {                                        
                $dot = strrpos($filename, '.');
                $filename_a = substr($filename, 0, $dot);
                $filename_b = substr($filename, $dot);

                $count = 1;
                while (file_exists(PerchUtil::file_path($bucket['file_path'].'/'.PerchUtil::tidy_file_name($filename_a.'-'.$count.$filename_b)))) {
                    $count++;
                }

                $filename = PerchUtil::tidy_file_name($filename_a . '-' . $count . $filename_b);
                $target = PerchUtil::file_path($bucket['file_path'].'/'.$filename);
        
            }
                                                                                                
            PerchUtil::move_uploaded_file($_FILES['upload']['tmp_name'], $target);
            
            $urlpath = $bucket['web_path'].'/'.$filename;
            
           

            if(isset($_GET['filetype']) && $_GET['filetype'] == 'image') {

                $width   = 640;
                $height  = false;
                $crop    = false;
                $quality = false;
                $density = false;
                $sharpen = false;


            	if (isset($_GET['width']) && is_numeric($_GET['width'])) {
                    $width = (int) $_GET['width'];
                }              

                if (isset($_GET['height']) && is_numeric($_GET['height'])) {
                    $height = (int) $_GET['height'];
                }

                if (isset($_GET['quality']) && is_numeric($_GET['quality'])) {
                    $quality = (int) $_GET['quality'];
                }

                if (isset($_GET['density']) && is_numeric($_GET['density'])) {
                    $density = (int) $_GET['density'];
                }

                if (isset($_GET['sharpen']) && is_numeric($_GET['sharpen'])) {
                    $sharpen = (int) $_GET['sharpen'];
                }

                if (isset($_GET['crop']) && $_GET['crop']=='true') {
                    $crop = true;
                }
            	
            	$PerchImage = new PerchImage();

                if ($quality) $PerchImage->set_quality($quality);
                if ($sharpen) $PerchImage->set_sharpening($sharpen);
                if ($density) $PerchImage->set_density($density);

            	$result = $PerchImage->resize_image($target, $width, $height, $crop);

                if (is_array($result)) {
                    
                    if (isset($result['web_path'])) {
                        $urlpath = $result['web_path'];
                    }
                }          	
            }

            echo '<script type="text/javascript">window.parent.CKEDITOR.tools.callFunction('.$funcNum.',"'.$urlpath.'");</script>';
                		
    	} else {
    		echo '<p class="message">Upload failed. Is the directory writable?</p>';
    	}
    } else {
    	echo '<p class="message">Upload failed.</p>';
    }

