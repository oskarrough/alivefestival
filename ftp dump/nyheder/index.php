<?php include($_SERVER['DOCUMENT_ROOT'].'/perch/runtime.php'); ?>

<?php perch_layout('global.header'); ?>

	<div class="Box">
		<h1 class="PageTitle"><span><?php perch_content('Main heading'); ?></span></h1>

		<?php perch_blog_recent_posts(999); ?>

		<p>Tjek <a href="http://facebook.com/alivefestival">Alive Festival på Facebook</a> for mere.</p>
	</div>

	<aside class="Aside">
		<?php perch_content('Aside'); ?>
		<?php #perch_blog_date_archive_months(); ?>
	</aside>

<?php perch_layout('global.footer'); ?>
