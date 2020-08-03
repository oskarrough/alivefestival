import Component from '@ember/component'
import fetch from 'fetch'
import axios from 'axios';

	/**
	 * Get instagram photos with Instagram API.
	 *
	 * The Instagram API has a limit of 240 requests per hour. With that,
	 * it was necessary to save the responses in jsonbox.io free service to serve
	 * the contents within that 1 hour. LocalStorage is also used to store the
	 * response in user browser, making access to the website faster.
	 */

export async function fetchImages() {
	
	let photos;
  
	const JSONBOX       = 'https://jsonbox.io/box_8ca8c4d26a91449ba088';
	const INSTAGRAM_API = 'https://graph.instagram.com';
	const TOKEN         = 'IGQVJWTnVmVC1NUlY2N0xJaWVWSGVxbThHQk1uWW5kYVNPME1yQXdsX192UFpCbV9rSXlmaGZAwWkVISF9hdHlwalFBc1BfZAFJWZA2pGOGpZAdkdtOE1DQWZAVYVEzZA2t0TkJENmFBM05ucHV0Q0NsaVNyWAZDZD';
	const REFRESH_TOKEN = `${INSTAGRAM_API}/refresh_access_token?grant_type=ig_refresh_token&access_token=${TOKEN}`;
	const USER_ID       = '17841400751087253';
	const fields        = 'caption,media_url,permalink,media_type';
  
	// Check LocalStorage for item 'instagram-photos'
	const localPhotos = localStorage.getItem('instagram-photos');
  
	/**
	 * Check LocalStorage for previous downloaded media.
	 * Also the 'last-request' is used to compare the time.
	 */
	const checkLocalStorage = () => {
	  let photos;
  
	  const currentTime = new Date().getTime();
	  const lastRequest = localStorage.getItem('last-request');
	  const timeCalc    = (currentTime - lastRequest) / 36e5;
  
	  // If time expired, a new request should be made.
	  // In other words, if the difference is higher than 1 hour.
	  photos = timeCalc > 1 ? [] : JSON.parse(localPhotos);
	  return photos;

	};
  
	/**
	 * Make a request to the jsonbox.io service endpoint
	 * to obtain the stored photos in JSON format.
	 * If JSON is empty, a new request to Instagram API should be made.
	 */
	const checkJsonBox = async () => {
	  	const { data: [ result ] } = await axios.get(JSONBOX);
		let resulti = ({ data: [ result ] });

		let { photos, _createdOn } = resulti;
  
		const createdOn   = new Date(_createdOn).getTime();
		const currentTime = new Date().getTime();
		const timeCalc    = (currentTime - createdOn) / 36e5;
	
		// If time expired, a new request should be made.
		// In other words, if the difference is higher than 1 hour.
		if (timeCalc > 1) {
		  // But we need to empty the array from jsonbox.io
		  await axios.post(JSONBOX, { photos: [] });
		
		  // And reset photos array, so the script will call the Instagram method.
		  photos = [];
		}
		console.log("chekc for photos in jsonbox", photos);
		return photos;
	  
	};

	/**
	 * Refresh Instagram token after each request.
	 */
	const refreshToken = async () => await axios.get(REFRESH_TOKEN);
  
	/**
	 * Get photos from Instagram API after all tests failed.
	 */
	const getInstagramPhotos = async () => {
		
	  let photos = [];
  
	  try {
		const currentTime = new Date().getTime();
		const { data } = await axios.get(`${INSTAGRAM_API}/${USER_ID}?fields=media&access_token=${TOKEN}`);
		const { data: response } = data.media;
  
		const promises = response.map(async (item) => {
		  const { data } = await axios.get(`${INSTAGRAM_API}/${item.id}?fields=${fields}&access_token=${TOKEN}`);
		  const { media_url, permalink, caption } = data;
		  return { media_url, permalink, caption };
		});
  
		// Wait until all promises resolve.
		photos = await Promise.all(promises);
  
		// Save results in localStorage avoiding the limitation
		// of Instagram Graph API.
		localStorage.setItem('instagram-photos', JSON.stringify(photos));
		localStorage.setItem('last-request', currentTime);
  
		// Save in jsonbox.io too
		await axios.post(JSONBOX, { photos });
		
		// Refresh token
		refreshToken();
	  } catch (e) {
		console.error('Unable to retrieve photos. Reason: ' + e.toString());
	  } finally {
		  console.log(photos);
		return photos;
	  }
	};
  
	
	// If the key does not exist, the remaining steps must be checked
	// before making a new request to the Instagram API.
	console.log('before checking local storage' , photos);
	if (localPhotos) photos = checkLocalStorage();
	console.log('before checking jsonbox' , photos);
	if (!localPhotos || photos.length === 0) photos = await checkJsonBox();
	console.log('before asking instagram' , photos);
	photos = await getInstagramPhotos();
	console.log('done' , photos);
	// Finally we call the render function.
	
	// render(photos);
	let images = photos.filter((media) => media.media_url.indexOf('video') === -1);
	return images



}

export default Component.extend({
	count: 8,
	init() {
		this._super()
		fetchImages().then(images => {
			this.set('images', images)
		})
	}
})



