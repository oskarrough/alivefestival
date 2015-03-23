<?php
    define('PERCH_LICENSE_KEY', 'P21207-NKW562-TVQ480-EJY383-ZSS028');

    define("PERCH_DB_USERNAME", 'alive_perch2');
    define("PERCH_DB_PASSWORD", 'UAfD6vPpk8cFVo');
    define("PERCH_DB_SERVER", "localhost");
    define("PERCH_DB_DATABASE", "alive_perch2");
    define("PERCH_DB_PREFIX", "perch2_");

    define('PERCH_TZ', 'UTC');

    define('PERCH_EMAIL_FROM', 'oskar@alivefestival.dk');
    define('PERCH_EMAIL_FROM_NAME', 'Oskar Mosumgaard');

    define('PERCH_LOGINPATH', '/perch');
    define('PERCH_PATH', str_replace(DIRECTORY_SEPARATOR.'config', '', dirname(__FILE__)));
    define('PERCH_CORE', PERCH_PATH.DIRECTORY_SEPARATOR.'core');

    define('PERCH_RESFILEPATH', PERCH_PATH . DIRECTORY_SEPARATOR . 'resources');
    define('PERCH_RESPATH', PERCH_LOGINPATH . '/resources');

    define('PERCH_HTML5', true);

    #define('PERCH_DEBUG', true);

    define('PERCH_SCHEDULE_SECRET', 'yasemin');

?>
