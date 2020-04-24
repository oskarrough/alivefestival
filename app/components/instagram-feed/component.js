import Component from '@ember/component'
import fetch from 'fetch'

const token = '464217036.db1fb5e.a283d54bf7c44952bbba576bee4a8317'

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


