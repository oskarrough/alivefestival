<?php include($_SERVER['DOCUMENT_ROOT'].'/perch/runtime.php'); ?>

<!DOCTYPE html>
<html class="no-js">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <meta name="description" content="">
    <link rel="canonical" href="http://alivefestival.dk/">
    <meta property="fb:app_id" content="114798911889232">
    <meta property="og:site_name" content="Alive Festival">
    <meta property="og:url" content="http://facebook.om/alivefestival">
    <meta property="og:image" content="/images/2014/alive-header-trans.png">
    <meta property="og:title" content="Alive Festival">
    <title><?php perch_blog_post_field(perch_get('s'), 'postTitle'); ?> - Alive Festival</title>
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
    <link rel="icon" type="image/png" href="/favicon-196x196.png" sizes="196x196">
    <link rel="icon" type="image/png" href="/favicon-160x160.png" sizes="160x160">
    <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96">
    <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16">
    <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="msapplication-TileImage" content="/mstile-144x144.png">

    <?php #perch_get_css(); ?>
    <link rel="stylesheet" href="/styles/main.css">

    <script src="/scripts/vendor/modernizr.custom.min.js"></script>
    <script>
      var html = document.getElementsByTagName('html')[0];
      html.className += '  wf-loading';
      setTimeout(function() {
      html.className = html.className.replace(' wf-loading', '');
      }, 5000);

      WebFontConfig = { fontdeck: { id: '46228' } };

      (function() {
      var wf = document.createElement('script');
      wf.src = 'http://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
      wf.type = 'text/javascript';
      wf.async = 'true';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(wf, s);
      })();

    </script>
  </head>
  <body class="page-<?php echo perch_pages_title(true); ?>">

	<header id="Header" class="Header">
	  <h1 class="Logo">
	  	<a href="/">
	  		<img src="/images/2014/alive-header-trans.png" alt="Alive Festival">
	  	</a>
	  </h1>

	  <nav id="SiteNav" class="SiteNav">
	  	<?php #perch_pages_navigation(); ?>

	<?php perch_pages_navigation(array(
		'hide-extensions' => true,
		'template' => array('item.html', 'dropdown.html')
	));?>

	     <!-- <ul class="is-hidden Navigation Navigation primary"> -->

	  </nav>
	  <div class="Social"><a href="http://facebook.com/alivefestival" class="Social-facebook"><img src="/images/handycons/facebook_32.png" alt=""></a></div>
	</header>
	<main id="Main" class="Main">

	<div class="Box">
		<div class="post">
			<h1 class="PageTitle"><span><?php perch_content('Main heading'); ?></span></h1>
			<?php perch_blog_post(perch_get('s')); ?>
		</div>
	</div>

	<aside class="Aside">
		<?php #perch_blog_recent_posts(999); ?>
		<?php #perch_content('Aside'); ?>
		<?php #perch_blog_date_archive_months(); ?>
	</aside>

<?php perch_layout('global.footer'); ?>
