<?php
/**
 * The template for displaying all single posts.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package alivefestival
 */

get_header(); ?>

<div style="position: absolute; z-index: -1; visibility: hidden;">
	<?php
		// Start the loop.
		while ( have_posts() ) : the_post();
		// Include the page content template.
		get_template_part( 'template-parts/content', get_post_format() );
		// End of the loop.
		endwhile;
		?>
</div>

<?php get_footer();
