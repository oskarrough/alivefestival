<?php #include('perch/templates/pages/default.php'); ?>

<?php include($_SERVER['DOCUMENT_ROOT'].'/perch/runtime.php'); ?>

<?php perch_layout('global.header'); ?>

	<div class="Box">
		<h1 class="PageTitle"><span><?php perch_content('Main heading'); ?></span></h1>
		<?php perch_content('Main'); ?>
	</div>

	<aside class="Aside">
		<?php perch_content('Aside'); ?>
	</aside>

<?php perch_layout('global.footer'); ?>
