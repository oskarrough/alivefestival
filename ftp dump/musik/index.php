<?php include($_SERVER['DOCUMENT_ROOT'].'/perch/runtime.php'); ?>

<?php perch_layout('global.header'); ?>

	<?php #perch_content('Main heading'); ?>
	<?php #perch_content('Main'); ?>

	<?php
		perch_content_create('Artists', array(
			'template'  => 'artist-detail.html',
			'multiple'  => true,
			'edit-mode' => 'listdetail',
		));
	?>

	<div class="Box Box--center">
		<h1 class="PageTitle"><?php perch_content('Main slogan'); ?></h1>
		<?php perch_content('Main'); ?>
		<!-- <p>
			<a target="_blank" href="embed-spotify.html" class="Button">Hør musikken med Spotify</a>
			<a target="_blank" href="embed-youtube.html" class="Button">Hør musikken med YouTube</a>
		</p> -->
	</div>

	<!-- <ul id="Masonry" class="Masonry Artists"> -->

		<!-- <li class="Artist Artist--big">
			<div class="Box Box--center">
				<h1 class="PageTitle"><?php perch_content('Main slogan'); ?></h1>
				<?php perch_content('Main'); ?>
				<p>
					<a target="_blank" href="embed-spotify.html" class="Button">Hør musikken med Spotify</a>
					<a target="_blank" href="embed-youtube.html" class="Button">Hør musikken med YouTube</a>
				</p>
			</div>
		</li> -->

		<?php/*

		// List mode
			perch_content_custom('Artists', array(
				'template' => 'artist-teaser.html',
				'filter' => 'year',
				'match' => 'eq',
				'value' => '2015'
			));
			if (perch_get('s')) {
				// detail
			} else {
				// list
			}
		?>

	<!-- </ul> -->

	<!-- <ul id="Masonry" class="Masonry Artists">

		<li class="Artist Artist--big">
			<div class="Box Box--center">
				<h1 class="PageTitle"><?php perch_content('Main slogan'); ?></h1>
				<?php perch_content('Main'); ?>
				<p><a target="_blank" href="embed-spotify.html" class="Button">Hør musikken med Spotify</a><a target="_blank" href="embed-youtube.html" class="Button">Hør musikken med YouTube</a></p>
		</li>

		<?php #perch_content('Tab1 main'); ?>

	</ul> -->

<?php perch_layout('global.footer'); ?>
