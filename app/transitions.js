export default function() {
	// Set velocity.js defaults
	this.setDefault({
		duration: 150
		// easing: [0.86, 0.0, 0.07, 1.0]
	})

	// Add transitions between overview and detail pages for /program and /news
	this.transition(
		this.fromRoute(['news.index', 'program.index']),
		this.toRoute(['news.post', 'program.artist']),
		this.use('fade'),
		this.reverse('fade')
	)
}
