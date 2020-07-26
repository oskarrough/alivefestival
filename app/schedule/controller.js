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
	onsdag: computed('tag', 'model.artists.@each.tags', function(){
		let tag = this.get('tag')
		if (!tag || tag === 'all') {
			return;
		}
		if(tag === "onsdag"){
			return true;
		}
	}),
	torsdag: computed('tag', 'model.artists.@each.tags', function(){
		let tag = this.get('tag')
		if(tag === "torsdag"){
			return true;
		}
	}),
	fredag: computed('tag', 'model.artists.@each.tags', function(){
		let tag = this.get('tag')
		if(tag === "fredag"){
			return true;
		}
	}),
	lørdag: computed('tag', 'model.artists.@each.tags', function(){
		let tag = this.get('tag')
		if(tag === "lørdag"){
			return true;
		}
	}),
	søndag: computed('tag', 'model.artists.@each.tags', function(){
		let tag = this.get('tag')
		if(tag === "søndag"){
			return true;
		}
	}),
	filteredArtists: computed('tag', 'model.artists.@each.tags', function() {
		let tag = this.get('tag')
		let artists = this.get('model.artists')		
		if (!tag || tag === 'all') {
			return artists
		}
	
		// To get "music" artists we get those without any tags.
		if (tag === 'onsdag') {
			return artists.filter(artist => {
				let tags = artist.get('tags')
				if (!tags) return false
	
				return tags.any(t => {
					let name = t.get('name')
					if (t.id === '32') name = 'onsdag'
					return name === tag
				})
			}) 
		} 
		if (tag === "torsdag"){
			return artists.filter(artist => {
				let tags = artist.get('tags')
	
				if (!tags) return false
	
				return tags.any(t => {
					let name = t.get('name')
					if (t.id === '33') name = 'torsdag'
					return name === tag
				})
			}) 
		} 
		if (tag === "fredag"){
			return artists.filter(artist => {
				let tags = artist.get('tags')
	
				if (!tags) return false
	
				return tags.any(t => {
					let name = t.get('name')
					if (t.id === '34') name = 'fredag'
					return name === tag
				})
			})
		} 
		if (tag === "lørdag"){
			return artists.filter(artist => {
				let tags = artist.get('tags')
	
				if (!tags) return false
	
				return tags.any(t => {
					let name = t.get('name')
					if (t.id === '35') name = 'lørdag'
					return name === tag
				})
			})
		} 
		if (tag === "søndag"){
			return artists.filter(artist => {
				let tags = artist.get('tags')
	
				if (!tags) return false
	
				return tags.any(t => {
					let name = t.get('name')
					if (t.id === '36') name = 'søndag'
					return name === tag
				})
			})
		} 

		
	})
})
