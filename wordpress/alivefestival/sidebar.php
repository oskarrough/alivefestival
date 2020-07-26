<?php
/**
 * The  containing the main widget area.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package alivefestival
 */

if ( ! is_active_( '-1' ) ) {
	return;
}
?>

<!-- <aside id="secondary" class="widget-area" role="complementary">
	<?php dynamic_( '-1' ); ?>
</aside>#secondary -->
<div id="sidebar-primary" class="sidebar">
    <?php dynamic_sidebar( 'sidebar-1' ); ?>
</div>