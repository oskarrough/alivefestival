</main>

	<?php PerchUtil::output_debug(); ?>

	<div class="Loader">
		<ul class="Loader-object">
			<li></li>
			<li></li>
			<li></li>
		</ul>
	</div>

	<div class="Scripts">
		<?php #perch_get_javascript(); ?>
		<script src="/scripts/vendor.js"></script>
		<script src="/scripts/main.js"></script>

		<div class="Facebook">
			<div id="fb-root"></div>
			<script>(function(d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s); js.id = id;
			js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=114798911889232&version=v2.0";
			fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'facebook-jssdk'));</script>
		</div>
		<script>
			(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
			function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
			e=o.createElement(i);r=o.getElementsByTagName(i)[0];
			e.src='https://www.google-analytics.com/analytics.js';
			r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
			ga('create','UA-3906535-9');ga('send','pageview');
		</script>
	</div>

</body>
</html>
