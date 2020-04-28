<?php
/**
 * alivefestival functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package alivefestival
 */

if ( ! function_exists( 'alivefestival_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function alivefestival_setup() {
	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on alivefestival, use a find and replace
	 * to change 'alivefestival' to the name of your theme in all the template files.
	 */
	load_theme_textdomain( 'alivefestival', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support( 'post-thumbnails' );

	add_image_size('s', '320');
	add_image_size('m', '640');
	add_image_size('l', '1280');
	add_image_size('xl', '1920');
	add_image_size('xxl', '2560');

	add_image_size('mini', '200', '180', true);
	add_image_size('mini-double', '400', '360', true);
	add_image_size('wide', '702', '60', true);
	add_image_size('bg-portrait-l', '720', '1280', true);
	add_image_size('bg-portrait-xl', '1080', '1920', true);

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'primary' => esc_html__( 'Primary', 'alivefestival' ),
	) );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	) );

	/*
	 * Enable support for Post Formats.
	 * See https://developer.wordpress.org/themes/functionality/post-formats/
	 */
	add_theme_support( 'post-formats', array(
		'aside',
		'image',
		'video',
		'quote',
		'link',
	) );

	// Set up the WordPress core custom background feature.
	add_theme_support( 'custom-background', apply_filters( 'alivefestival_custom_background_args', array(
		'default-color' => 'ffffff',
		'default-image' => '',
	) ) );
}
endif;
add_action( 'after_setup_theme', 'alivefestival_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function alivefestival_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'alivefestival_content_width', 640 );
}
add_action( 'after_setup_theme', 'alivefestival_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function alivefestival_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'alivefestival' ),
		'id'            => 'sidebar-1',
		'description'   => '',
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'alivefestival_widgets_init' );



/**
 * Enqueue scripts and styles.
 */
function alivefestival_scripts() {
	wp_enqueue_style( 'alivefestival-style', get_stylesheet_uri() );
}
add_action( 'wp_enqueue_scripts', 'alivefestival_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/inc/extras.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
require get_template_directory() . '/inc/jetpack.php';

/**
 * Remove canonical redirects because we're using ember.js
 */
remove_filter('template_redirect', 'redirect_canonical');

/* Change Excerpt length */
function custom_excerpt_length( $length ) {
	// words
	return 18;
}
add_filter('excerpt_length', 'custom_excerpt_length', 999);



// function enable_more_s($buttons) {
// 	// $buttons[] = 'fontselect';
// 	// $buttons[] = 'fontsizeselect';
// 	$buttons[] = 'styleselect';
// 	// $buttons[] = 'backcolor';
// 	// $buttons[] = 'newdocument';
// 	// $buttons[] = 'cut';
// 	// $buttons[] = 'copy';
// 	// $buttons[] = 'charmap';
// 	// $buttons[] = 'hr';
// 	// $buttons[] = 'visualaid';
// 	return $buttons;
// }
// add_filter('mce_buttons_3', 'enable_more_buttons');
