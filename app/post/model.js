import PostModel from 'ember-wordpress/models/post'
import DS from 'ember-data'

export default PostModel.extend({
	better_featured_image: DS.attr()
})
