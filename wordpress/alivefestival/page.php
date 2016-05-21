<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package alivefestival
 */

get_header(); ?>

	<div style="position: absolute; z-index: -1; visibility: hidden;">
		<?php
			// Start the loop.
			while ( have_posts() ) : the_post();
			// Include the page content template.
			get_template_part( 'template-parts/content', 'page' );
			// End of the loop.
			endwhile;
			?>
	</div>

<?php get_footer();
