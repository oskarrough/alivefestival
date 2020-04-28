import Component from '@ember/component'
import fetch from 'fetch'

const token = 'IGQVJXYVpSN0lNS634hgdf83hjdj21Joal9QSkFveDdwX2xZAN0J0MWJxVV8wcG9kUl9pczBQRU9pVWxqR1ZAINUJyM05JMl9RZAU1FTWE4bm1CRFJ2WkE3aVRoRXdXZA1A3dDktRDRkRHZArUW44MC1hb1dR'

export function fetchImages(token, count) {
	const base = 'https://api.instagram.com/v1/users/self/'
	const url = `${base}media/recent/?access_token=${token}&count=${count}`
	return fetch(url)
		.then(res => res.json())
		.then(data => data.data)
}

export default Component.extend({
	count: 5,

	init() {
		this._super()
		fetchImages(token, this.get('count')).then(images => {
			this.set('images', images)
		})
	}
})


