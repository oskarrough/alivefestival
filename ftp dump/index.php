<?php include($_SERVER['DOCUMENT_ROOT'].'/perch/runtime.php'); ?>

<?php perch_layout('global.top'); ?>

<div class="Box Box--small" style="max-width: 33em; margin-left: auto; margin-right: auto; padding: 0.5em; text-align: center; ">
	<h1><span><?php perch_content('Main heading'); ?></span></h1>
	<?php perch_content('Main'); ?>
</div>

<div class="Box" style="background-color: #222; padding: 1.25em;">
	<div class="royalSlider rsDefault Slideshow--tabs ">
		<img class="rsImg" src="/images/gallery2/koncert.jpg" data-rsTmb="/images/gallery2/koncert.jpg" />
		<img class="rsImg" src="/images/alive2012-holder.jpg" data-rsVideo="http://www.youtube.com/watch?v=xHyDHIuHtNg" data-rsTmb="/images/alive2012-holder.jpg" />
		<!-- <img class="rsImg" src="/images/2013/artists/christian-hjelm.jpg" data-rsTmb='/images/2013/artists/christian-hjelm.jpg' alt='Christian Hjelm'>
		<img class="rsImg" src="/images/2013/artists/the-raveonettes.jpg" data-rsTmb='/images/2013/artists/the-raveonettes.jpg' alt='The Raveonettes'> -->
		<img class="rsImg" src="/images/gallery2/publikum5.jpg" data-rsTmb='/images/gallery2/publikum5.jpg'>
		<img class="rsImg" src="/images/gallery2/koncert3.jpg" data-rsTmb='/images/gallery2/koncert3.jpg'>
		<img class="rsImg" src="/images/gallery2/publikum.jpg" data-rsTmb='/images/gallery2/publikum.jpg'>
		<img class="rsImg" src="/images/gallery2/koncert2.jpg" data-rsTmb='/images/gallery2/koncert2.jpg'>
		<img class="rsImg" src="/images/gallery2/publikum2.jpg" data-rsTmb='/images/gallery2/publikum2.jpg'>
		<img class="rsImg" src="/images/gallery2/publikum4.jpg" data-rsTmb='/images/gallery2/publikum4.jpg'>
		<!-- <img class="rsImg" src="/images/2013/artists/veto.jpg" data-rsTmb='/images/2013/artists/veto.jpg' alt='Veto'> -->
		<!-- <img class="rsImg" src="/images/2013/artists/folkeklubben.jpg" data-rsTmb='/images/2013/artists/folkeklubben.jpg' alt='Folkeklubben'> -->
		<!-- <img class="rsImg" src="/images/2013/artists/den-sorte-skole.jpg" data-rsTmb='/images/2013/artists/den-sorte-skole.jpg' alt='Den Sorte Skole'>
		<img class="rsImg" src="/images/2013/artists/ebo-taylor.jpg" data-rsTmb='/images/2013/artists/ebo-taylor.jpg' alt='Ebo Taylor'>
		<img class="rsImg" src="/images/2013/artists/fallulah2.jpg" data-rsTmb='/images/2013/artists/fallulah2.jpg' alt='Fallulah'> -->
		<!-- <img class="rsImg" src="/images/2013/artists/moe.jpg" data-rsTmb='/images/2013/artists/moe.jpg' alt='Mø'> -->
	</div>

	<p><a href="https://www.facebook.com/alivefestival/photos_albums" target="_blank" class="Button Button">&rarr; Se flere billeder på vores Facebook</a></p>
</div>

<div class="Box">
	<div class="Box-child">
		<h2>Seneste nyt</h2>
		<?php perch_blog_recent_posts(5); ?>
		<p><a href="/blog">&rarr; Se alle nyheder</a></p>

		<h2>Nyhedsbrev</h2>
		<div class="Constrained">
			<!-- Newsletter  -->
			<div class="Newsletter">
				<div id="mc_embed_signup">
					<form action="http://alivefestival.us1.list-manage.com/subscribe/post?u=3a2e1bf24336c9a6bf87f2fc7&amp;id=e29c6f4325" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate="">
						<label for="mce-EMAIL">Få vores nyhedsbrev</label>
						<input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required="">
						<input type="submit" value="Tilmeld" name="subscribe" id="mc-embedded-subscribe" class="button">
					</form>
				</div>
			</div>
		</div>
	</div>

	<div class="Box-child">
		<h2>#ThyAlive på Instagram</h2>
		<p>Festivalens officielle hashtag er <a href="http://www.gramfeed.com/instagram/tags#thyalive" target="_blank">#ThyAlive</a>. Tag dine billeder og vær med!</p>
		<div class="Constrained">
			<!-- SnapWidget -->
			<iframe src="http://snapwidget.com/in/?h=dGh5YWxpdmV8aW58ODB8NHwzfHx5ZXN8NXxub25lfG9uU3RhcnQ=" allowTransparency="true" frameborder="0" scrolling="no" style="border:none; overflow:hidden; width:100%; height: 285px; padding: 0;" ></iframe>
		</div>
	</div>

	<br>
	<hr>
	<br>
	<!-- Facebook -->
	<div class="fb-like" data-href="http://facebook.com/alivefestival" data-send="true" data-width="400" data-show-faces="true"></div>
</div>

<?php perch_layout('global.footer'); ?>
