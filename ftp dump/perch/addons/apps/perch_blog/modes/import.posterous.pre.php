<?php
    
    $HTML = $API->get('HTML');

    if (!$CurrentUser->has_priv('perch_blog.import')) {
        PerchUtil::redirect($API->app_path());
    }



    $BlogUtil = new PerchBlog_Util($API);

    if (!isset($_GET['file'])) exit;

    $file = urldecode($_GET['file']);
    $format = 'html';

    if (isset($_GET['format'])) {
        $format = $_GET['format'];
    }











?>