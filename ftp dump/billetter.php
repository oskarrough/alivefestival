<?php include($_SERVER['DOCUMENT_ROOT'].'/perch/runtime.php'); ?>

<?php perch_layout('global.header'); ?>

	<div class="Box">
		<h1 class="PageTitle"><span><?php perch_content('Main heading'); ?></span></h1>
		<?php perch_content('Main'); ?>
	</div>

	<aside class="Aside">
		<?php perch_content('Aside'); ?>

	  <div class="Mood3">
	    <figure class="Frame"><img src="/images/gallery/alive2010-mames.jpg"></figure>
	  </div>
	</aside>

	<div class="Grid Grid--2">
	  <div class="Grid-u Mood1">
	    <figure class="Frame"><img src="/images/moods/P7_1.gif"></figure>
	  </div>
	  <div class="Grid-u Mood2">
	    <figure class="Frame Frame--square"><img src="/images/gallery/koncert3.jpg"></figure>
	  </div>
	</div>

<?php perch_layout('global.footer'); ?>
