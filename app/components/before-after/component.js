import Component from '@ember/component'
import $ from 'jquery'

export default Component.extend({
	classNames: ['BeforeAfter'],
	didInsertElement() {
		this.$('img:last').wrap('<div class="BeforeAfter-resize" />')
		this.$().beforeAfter()
	}
})
;(function($) {
	function drags(dragElement, resizeElement, container) {
		// Initialize the dragging event on mousedown.
		dragElement
			.on('mousedown touchstart', function(e) {
				dragElement.addClass('is-draggable')
				resizeElement.addClass('is-resizable')

				// Check if it's a mouse or touch event and pass along the correct value
				var startX = e.pageX ? e.pageX : e.originalEvent.touches[0].pageX

				// Get the initial position
				var dragWidth = dragElement.outerWidth()
				var posX = dragElement.offset().left + dragWidth - startX
				var containerOffset = container.offset().left
				var containerWidth = container.outerWidth()

				// Set limits
				var minLeft = containerOffset + 10
				var maxLeft = containerOffset + containerWidth - dragWidth - 10

				// Calculate the dragging distance on mousemove.
				dragElement
					.parents()
					.on('mousemove touchmove', function(event) {
						// Check if it's a mouse or touch event and pass along the correct value
						var moveX = event.pageX
							? event.pageX
							: event.originalEvent.touches[0].pageX
						var leftValue = moveX + posX - dragWidth

						// Prevent going off limits
						if (leftValue < minLeft) {
							leftValue = minLeft
						} else if (leftValue > maxLeft) {
							leftValue = maxLeft
						}

						// Translate the handle's left value to masked divs width.
						var widthValue =
							(leftValue + dragWidth / 2 - containerOffset) *
								100 /
								containerWidth +
							'%'

						// Set the new values for the slider and the handle.
						// Bind mouseup events to stop dragging.
						$('.BeforeAfter .is-draggable')
							.css('left', widthValue)
							.on('mouseup touchend touchcancel', function() {
								$(this).removeClass('is-draggable')
								resizeElement.removeClass('is-resizable')
							})
						$('.is-resizable').css('width', widthValue)
					})
					.on('mouseup touchend touchcancel', function() {
						dragElement.removeClass('is-draggable')
						resizeElement.removeClass('is-resizable')
					})
				e.preventDefault()
			})
			.on('mouseup touchend touchcancel', function() {
				dragElement.removeClass('is-draggable')
				resizeElement.removeClass('is-resizable')
			})
	}

	// Define plugin
	$.fn.beforeAfter = function() {
		var cur = this

		// Adjust the slider
		var width = cur.width() + 'px'
		cur.find('.BeforeAfter-resize img').css('width', width)

		// Bind dragging events
		drags(cur.find('.BeforeAfter-handle'), cur.find('.BeforeAfter-resize'), cur)

		// Update sliders on resize.
		// Because we all do this: i.imgur.com/YkbaV.gif
		$(window).resize(function() {
			var width = cur.width() + 'px'
			cur.find('.BeforeAfter-resize img').css('width', width)
		})
	}
})($)
