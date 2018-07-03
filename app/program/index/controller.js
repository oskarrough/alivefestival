import Controller from '@ember/controller'
import {computed} from '@ember/object'

export default Controller.extend({
	queryParams: ['tag'],
	tag: 'all',

	// get all, unique tags for our menu
	tags: computed('model.artists.@each.tags', function() {
		return this.get('model.artists')
			.mapBy('tags.firstObject')
			.uniq()
	}),

	// this either returns all or a filtered subset of artists
	filteredArtists: computed('tag', 'model.artists.@each.tags', function() {
		let tag = this.get('tag')
		let artists = this.get('model.artists')

		if (!tag || tag === 'all') {
			return artists
		}

		// To get "music" artists we get those without any tags.
		if (tag === 'music') {
			return artists.filter(artist => !artist.get('tags.length'))
		}

		return artists.filter(artist => {
			let tags = artist.get('tags')

			if (!tags) return false

			return tags.any(t => {
				let name = t.get('name')
				if (t.id === '9') name = 'event'
				return name === tag
			})
		})
	})
})
