<?php include($_SERVER['DOCUMENT_ROOT'].'/perch/runtime.php'); ?>

<?php perch_layout('global.header'); ?>

	<?php #perch_content('Main heading'); ?>
	<?php #perch_content('Main'); ?>

	<?php
		// Detail mode
		perch_content_custom('Artists', array(
			// 'template' => 'artist-detail.html',
			// 'filter'   => 'slug',
			// 'match'    => 'eq',
			// 'value'    => perch_get('s'),
			// 'count'    => 1,
			'page' => '/musik.php',
			'template' => 'artist-detail.html',
			'filter' => 'slug',
			'match' => 'eq',
			'value' => perch_get('s'),
			'count' => 1,
		));
	?>

<?php perch_layout('global.footer'); ?>
