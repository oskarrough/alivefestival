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
	musiccategory: computed('tag', 'model.artists.@each.tags', function(){
		let tag = this.get('tag')
		if (!tag || tag === 'all') {
			return;
		}
		if(tag === "event"){
			return false;
		} else {
			return true;
		}
	}),
	eventcategory: computed('tag', 'model.artists.@each.tags', function(){
		let tag = this.get('tag')
		if(tag === "event"){
			return true;
		}
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
		if (tag === "event"){
			return artists.filter(artist => {
				let tags = artist.get('tags')
	
				if (!tags) return false
	
				return tags.any(t => {
					let name = t.get('name')
					if (t.id === '9') name = 'event'
					return name === tag
				})
			}) 
		} 
		if (tag === "jazz"){
			return artists.filter(artist => {
				let tags = artist.get('tags')
	
				if (!tags) return false
	
				return tags.any(t => {
					let name = t.get('name')
					if (t.id === '13') name = 'jazz'
					return name === tag
				})
			})
		} 
		if (tag === "rnb"){
			return artists.filter(artist => {
				let tags = artist.get('tags')
	
				if (!tags) return false
	
				return tags.any(t => {
					let name = t.get('name')
					if (t.id === '14') name = 'rnb'
					return name === tag
				})
			})
		} 
		if (tag === "rock"){
			return artists.filter(artist => {
				let tags = artist.get('tags')
	
				if (!tags) return false
	
				return tags.any(t => {
					let name = t.get('name')
					if (t.id === '16') name = 'rock'
					return name === tag
				})
			})
		} 
		if (tag === "elektronisk"){
			return artists.filter(artist => {
				let tags = artist.get('tags')
	
				if (!tags) return false
	
				return tags.any(t => {
					let name = t.get('name')
					if (t.id === '15') name = 'elektronisk'
					return name === tag
				})
			})
		} 
		if (tag === "kunstoplevelse"){
			return artists.filter(artist => {
				let tags = artist.get('tags')
	
				if (!tags) return false
	
				return tags.any(t => {
					let name = t.get('name')
					if (t.id === '17') name = 'kunstoplevelse'
					return name === tag
				})
			})
		} 
		if (tag === "performance"){
			return artists.filter(artist => {
				let tags = artist.get('tags')
	
				if (!tags) return false
	
				return tags.any(t => {
					let name = t.get('name')
					if (t.id === '18') name = 'performance'
					return name === tag
				})
			})
		} 
		if (tag === "rap"){
			return artists.filter(artist => {
				let tags = artist.get('tags')
	
				if (!tags) return false
	
				return tags.any(t => {
					let name = t.get('name')
					if (t.id === '19') name = 'rap'
					return name === tag
				})
			})
		} 
		if (tag === "hiphop"){
			return artists.filter(artist => {
				let tags = artist.get('tags')
	
				if (!tags) return false
	
				return tags.any(t => {
					let name = t.get('name')
					if (t.id === '20') name = 'hiphop'
					return name === tag
				})
			})
		} 

		
	})
})
