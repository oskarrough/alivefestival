import Component from '@ember/component'
import fetch from 'fetch'

export function fetchImages(token, count) {
	const base = 'https://api.instagram.com/v1/users/self/'
	const url = `${base}media/recent/?access_token=${token}&count=${count}`
	return fetch(url)
		.then(res => res.json())
		.then(data => data.data)
}

export default Component.extend({
	count: 8,
	init() {
		let token = this.get("token")
		this._super()
		fetchImages(token, this.get('count')).then(images => {
			this.set('images', images)
		})
	}
})

