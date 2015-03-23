<?php include($_SERVER['DOCUMENT_ROOT'].'/perch/runtime.php'); ?>

<?php perch_layout('global.header'); ?>

	<div class="Box Box--dark Home-introbox">

		<h1 class="PageTitle"><span><?php perch_content('Main heading'); ?></span></h1>
		<!-- <p><a href="/billetter" class="Button Button--big">Få din billet nu!</a></p> -->
		<p class="Manchet"><?php perch_content('Overskrift under billetknap'); ?></p>
		<?php perch_content('Main'); ?>
		<!-- <div class="Asset Asset--plant"></div> -->
	</div>

	<div class="Home-mood">
		<figure class="Frame"><a href="https://www.youtube.com/watch?v=jYIxoxmtdnw" class="js-Popup--video"><img src="/images/2014/video-thumb.jpg"></a></figure>
	</div>

	<div class="Home-gallery">
		<div class="Slideshow js-Slideshow royalSlider rsDefault">
		<!-- <img src="images/gallery/when-saints-go-machine-s.jpg" class="rsImg" alt="When Saints Go Machine">
		<img src="images/gallery/oh-land.jpg" class="rsImg" alt="Oh Land">
		<a href="images/gallery/brandt-brauer-frick.jpg" class="rsImg">Brandt Brauer Frick (DE)</a>
		<a href="images/gallery/p-6767.jpg" class="rsImg"></a>
		<a href="images/gallery/blaue-blume.jpg" class="rsImg">Blaue Blume</a> -->
		<a href="images/gallery/p-7010-s.jpg" class="rsImg"></a>
		<a href="images/gallery/p-6812-s.jpg" class="rsImg">Camping</a>
		<a href="images/gallery/p-6543-s.jpg" class="rsImg"></a>
		<a href="images/gallery/p-6425-s.jpg" class="rsImg"></a>
		<a href="images/gallery/DSC_0180-28-s.jpg" class="rsImg"></a></div>

		<div class="Facebook">
			<div class="fb-like" data-href="https://facebook.com/alivefestival" data-layout="standard" data-action="like" data-show-faces="true" data-share="true"></div>
		</div>
	</div>

	<div class="Box Home-bryghus">
		<h2 class="Box-title">Nyheder</h2>
		<?php perch_blog_recent_posts(3); ?>
		<p>Se <a href="/nyheder">alle nyheder</a> og tjek <a href="http://facebook.com/alivefestival">Alive Festival på Facebook</a> for mere.</p>
	</div>

	<div class="Box Home-surf">
		<h2 class="Box-title">#ThyAlive på Instagram</h2>
		<p>Festivalens officielle hashtag er <a href="http://www.gramfeed.com/instagram/tags#thyalive" target="_blank">#ThyAlive</a>. Tag dine billeder og vær med!</p>
		<div class="Constrained">
			<!-- SnapWidget -->
			<iframe src="http://snapwidget.com/in/?h=dGh5YWxpdmV8aW58ODB8NHwzfHx5ZXN8NXxub25lfG9uU3RhcnQ=" allowTransparency="true" frameborder="0" scrolling="no" style="border:none; overflow:hidden; width:100%; height: 285px; padding: 0;" ></iframe>
		</div>
	</div>

	<?php
	/*
	<div class="Alist">
		<h2 class="Title"><?php perch_content('Artist overskrift'); ?></h2>

		<?php
		// List mode
		perch_content_custom('Artists', array(
			'template' => 'artist-list.html',
		));
		?>

		<br><br>
		<p><a href="/musik">Se hele programmet</a></p>
	</div>
	*/ ?>

	<!-- <div class="Home-map FrameWrap" style="max-width: 700px;" >
		<p class="Frame"><a href="https://www.google.com/maps/dir//Plantagevej+18,+7700+Thisted,+Denmark/@56.9793827,8.6558878,11z/data=!4m13!1m4!3m3!1s0x464998f2bb58c43f:0x715208302522c70f!2sPlantagevej+18!3b1!4m7!1m0!1m5!1m1!1s0x464998f2bb58c43f:0x715208302522c70f!2m2!1d8.690752!2d56.956506"><img src="/images/2014/map.jpg" alt=""></a></p>
	</div> -->

	<!-- <div class="Box Home-bryghus">
		<h2 class="Box-title"><?php perch_content('Bryghus title'); ?></h2>
		<p class="Manchet"><?php perch_content('Bryghus subtitle'); ?></p>
		<div class="FrameWrap FrameWrap--left">
		<figure class="Frame"><img src="/images/2014/thisted-bryghus.jpg" alt="Alive Festival starter med en Thy-øl på Thisted Bryghus"></figure>
		</div>
		<?php perch_content('Bryghus body'); ?>
	</div>

	<div class="Box Home-surf">
		<h2 class="Box-title"><?php perch_content('Surf title'); ?></h2>
		<div class="FrameWrap FrameWrap--right">
		<figure class="Frame"><img src="/images/2014/coldhawaii.jpg" alt="Cold Hawaii surfskole med Alive Festival"></figure>
		</div>
		<p class="Manchet"><?php perch_content('Surf subtitle'); ?></p>
		<?php perch_content('Surf body'); ?>
	</div>
 -->

	<div class="Asset Asset--guitar"></div>

<?php perch_layout('global.footer'); ?>
