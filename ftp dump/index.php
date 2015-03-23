<?php include($_SERVER['DOCUMENT_ROOT'].'/perch/runtime.php'); ?>

<!DOCTYPE html>
<html class="no-js">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta name="description" content="En dejlig og årlig musikfestival i Thy">
    <title><?php perch_pages_title(); ?> - Alive Festival</title>

    <link rel="canonical" href="http://alivefestival.dk/">
    <meta property="fb:app_id" content="114798911889232">
    <meta property="og:site_name" content="Alive Festival">
    <meta property="og:url" content="http://facebook.om/alivefestival">
    <meta property="og:image" content="/images/2014/alive-header-trans.png">
    <meta property="og:title" content="Alive Festival">

    <link rel="apple-touch-icon" sizes="57x57" href="images/favicons/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="114x114" href="images/favicons/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="images/favicons/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="144x144" href="images/favicons/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="60x60" href="images/favicons/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="120x120" href="images/favicons/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="76x76" href="images/favicons/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="152x152" href="images/favicons/apple-touch-icon-152x152.png">
    <link rel="icon" type="image/png" href="images/favicons/favicon-196x196.png" sizes="196x196">
    <link rel="icon" type="image/png" href="images/favicons/favicon-160x160.png" sizes="160x160">
    <link rel="icon" type="image/png" href="images/favicons/favicon-96x96.png" sizes="96x96">
    <link rel="icon" type="image/png" href="images/favicons/favicon-16x16.png" sizes="16x16">
    <link rel="icon" type="image/png" href="images/favicons/favicon-32x32.png" sizes="32x32">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="msapplication-TileImage" content="images/favicons/mstile-144x144.png">

    <?php #perch_get_css(); ?>
    <link rel="stylesheet" href="/styles/main.css">
    <script src="/scripts/vendor/vendor-header.js"></script>
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
  <body class="Splash">

  <style>html { padding: 0; } </style>

  <header id="Header" class="Header">
    <h1 class="Logo">
      <a href="/">
        <img src="/images/2014/alive-header-trans.png" alt="Alive Festival">
      </a>
    </h1>

    <nav id="SiteNav" class="SiteNav">
      <?php perch_pages_navigation(array(
        'hide-extensions' => true,
        'template' => array('item.html', 'dropdown.html')
      ));?>
    </nav>

    <div class="Social"><a href="http://facebook.com/alivefestival" class="Social-facebook"><img src="/images/handycons/facebook_32.png" alt=""></a></div>
  </header>
  <main id="Main" class="Main">


<div class="Splash-intro">
  <h1 class="PageTitle">ALIVE FESTIVAL</h1>
  <h2>THY 13.-14.-15. AUGUST 2015</h2>
</div>

<ul class="Splash-callouts">
  <li>
    <p>Tredages billet kun 495,- indtil den 4. april!</p>
  </li>
  <li>
    <p>I en skjult oase mellem hav og fjord i hjertet af Thy løber Alive Festival i år af stablen for syvende gang i træk.</p>
  </li>
  <li>
    <p>Følg med!</p>
  </li>
  <li>
    <p><a href="http://www.billetlugen.dk/da/event/alive-festival-2015-thy" class="Button">Få din billet nu</a></p>
  </li>
  <li>
    <p><a href="http://alivefestival.dk/home" class="Button">Mere info</a></p>
  </li>
  <li>
    <p><a href="https://facebook.com/alivefestival" class="Button">Facebook</a></p>
  </li>
</ul>

<?php perch_layout('global.footer'); ?>
