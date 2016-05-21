<?php
/*
Plugin Name: Alive Festival
Description: Custom Post Types for Alive Festival
Author: Oskar Rough
Author URI: http://oskarrough.com
*/

function artist_post_type() {
	$labels = array(
		'name'               => 'Artists',
		'singular_name'      => 'Artist',
		'add_new'            => 'Add New',
		'add_new_item'       => 'Add New Artist',
		'edit_item'          => 'Edit Artist',
		'new_item'           => 'New Artist',
		'all_items'          => 'All Artists',
		'view_item'          => 'View Artist',
		'search_items'       => 'Search Artists',
		'not_found'          => 'No artists found',
		'not_found_in_trash' => 'No artists found in the Trash',
		'parent_item_colon'  => '',
		'menu_name'          => 'Artists'
	);

	// The post type
	$args = array(
		'labels'        => $labels,
		'description'   => 'Holds our artists',
		'public'        => true,
		'menu_position' => 5,
		'supports'      => array('title', 'editor', 'thumbnail'),
		'taxonomies'    => array('post_tag', 'category'),
		'has_archive'   => true,
		// 'menu_icon' 	=> 'dashicons-palmtree',
		'show_in_rest'	=> true,
		'rest_base' => 'artists',
		'rewrite' => array('slug' => 'musik','with_front' => false),
	);

	register_post_type('artist', $args);
}

add_action('init', 'artist_post_type');

function memory_post_type() {
	$labels = array(
		'name'               => 'Memories',
		'singular_name'      => 'Memory',
		'add_new'            => 'Add New',
		'add_new_item'       => 'Add New Memory',
		'edit_item'          => 'Edit Memory',
		'new_item'           => 'New Memory',
		'all_items'          => 'All Memories',
		'view_item'          => 'View Memory',
		'search_items'       => 'Search Memories',
		'not_found'          => 'No memorys found',
		'not_found_in_trash' => 'No memorys found in the Trash',
		'parent_item_colon'  => '',
		'menu_name'          => 'Memories'
	);

	// The post type
	$args = array(
		'labels'        => $labels,
		'description'   => 'Holds our memorys',
		'public'        => true,
		'menu_position' => 5,
		'supports'      => array('title', 'editor', 'thumbnail'),
		'has_archive'   => true,
		// 'menu_icon' 	=> 'dashicons-palmtree',
		'show_in_rest'	=> true,
		'rest_base' => 'memories',
	);

	register_post_type('memory', $args);
}

add_action('init', 'memory_post_type');

// function director_post_type() {

// 	// GUI
// 	$labels = array(
// 		'name'               => 'Directors',
// 		'singular_name'      => 'Director',
// 		'add_new'            => 'Add New',
// 		'add_new_item'       => 'Add New Director',
// 		'edit_item'          => 'Edit Director',
// 		'new_item'           => 'New Director',
// 		'all_items'          => 'All Directors',
// 		'view_item'          => 'View Director',
// 		'search_items'       => 'Search Directors',
// 		'not_found'          => 'No projects found',
// 		'not_found_in_trash' => 'No projects found in the Trash',
// 		'parent_item_colon'  => '',
// 		'menu_name'          => 'Directors'
// 	);

// 	// The post type
// 	$args = array(
// 		'labels'        => $labels,
// 		'description'   => 'Holds our directors',
// 		'public'        => true,
// 		'menu_position' => 3,
// 		'supports'      => array('title'),
// 		'taxonomies'    => array('category'),
// 		'has_archive'   => true,
// 	);

// 	register_post_type('director', $args);
// }

// add_action('init', 'director_post_type');

// add_action('init', 'content_post_type');
