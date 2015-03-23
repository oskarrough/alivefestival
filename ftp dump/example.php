<?php include('perch/runtime.php'); ?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8" />
	<title>Perch Example Page</title>
	<?php perch_get_css(); ?>
</head>
<body>
    <h1><?php perch_content('Main heading'); ?></h1>

    <?php perch_content('Intro'); ?>
    
    <?php perch_get_javascript(); ?>
</body>
</html>