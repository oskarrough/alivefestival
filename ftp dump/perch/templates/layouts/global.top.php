<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title><?php perch_pages_title(); ?></title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<meta property="fb:app_id" content="114798911889232">
	<meta property="og:title" content="Alive Festival">
	<meta property="og:url" content="http://facebook.om/alivefestival">
	<meta property="og:image" content="">
	<meta name="description" content="Alive Festival er en dejlig musikfestival i Thy, Danmark">

	<link rel="stylesheet" href="/styles/main.css">
	<script src="/scripts/vendor/modernizr.custom.min.js"></script>
</head>
<body class="Page--<?php echo perch_pages_title(true); ?>">

	<header id="l-Header" class="l-Header">
		<h1 class="Logo"><a href="/"><img src="/images/alivefestival.png" alt=""></a></h1>

		<nav id="l-Navigation" class="l-Navigation">
			<?php perch_pages_navigation(array(
				'hide-extensions' => true,
				'template' => array('item.html', 'item-level2.html')
			));?>
		</nav>

		<div class="Social">
			<a href="http://facebook.com/alivefestival" class="Social-facebook"><img src="/images/handycons/facebook_32.png" alt="">
				<!--img(src='images/icon/social-facebook.png', alt='')-->
			</a>
		</div>

	</header>
	<div id="l-Main" class="l-Main">
