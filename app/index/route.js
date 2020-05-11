import {hash} from 'rsvp'
import Route from '@ember/routing/route'


export default Route.extend({
	
	
	model() {
		// change catergory 11 to catergory 12 for practical info (on 12 has no results yet)		
		return hash({
			samarbejdsteaser: this.store.findRecord('page', 302),
			frivilligteaser: this.store.findRecord("page", 2598),
			MusikTeaserDesign: this.store.findRecord("page", 2594),
			InspirationalQuoteDesign: this.store.findRecord("page", 2587),
			ArtistListDesign: this.store.findRecord('page', 2582),
			artists: this.store.query('artist', {
				categories: 10,
				per_page: 6
			}),
			activites: this.store.query('artist', {
				categories: 11,
				per_page: 4
			}),
			activitydesign: this.store.findRecord('page', 2562),
			page: this.store.findRecord('page', 67),
			news: this.store.query('post', {per_page: 8}),
			practical: this.store.query('artist', {
				categories: 12,
				per_page: 4
			}),
			
		})
		
	
	}
	
})
