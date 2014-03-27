<?php

    define('PERCH_LICENSE_KEY', 'P21207-NKW562-TVQ480-EJY383-ZSS028');

    // GIGAHOST
    // define("PERCH_DB_USERNAME", 'oskarlyf');
    // define("PERCH_DB_PASSWORD", '19w835m667');
    // define("PERCH_DB_SERVER", "mysql3.gigahost.dk");
    // define("PERCH_DB_DATABASE", "oskarlyf_aliveperch");
    // define("PERCH_DB_PREFIX", "perch2_");

    // MEDIA TEMPLE (DV)
    define("PERCH_DB_USERNAME", 'alive_perch');
    define("PERCH_DB_PASSWORD", 'UAfD6vPpk8cFVo');
    define("PERCH_DB_SERVER", "localhost");
    define("PERCH_DB_DATABASE", "alive_perch");
    define("PERCH_DB_PREFIX", "perch2_");
    
    define('PERCH_TZ', 'Europe/Copenhagen');

    define('PERCH_EMAIL_FROM', 'oskarrough@gmail.com');
    define('PERCH_EMAIL_FROM_NAME', 'Oskar Rough');

    define('PERCH_LOGINPATH', '/perch');
    define('PERCH_PATH', str_replace(DIRECTORY_SEPARATOR.'config', '', dirname(__FILE__)));
    define('PERCH_CORE', PERCH_PATH.DIRECTORY_SEPARATOR.'core');

    define('PERCH_RESFILEPATH', PERCH_PATH . DIRECTORY_SEPARATOR . 'resources');
    define('PERCH_RESPATH', PERCH_LOGINPATH . '/resources');
    
    define('PERCH_HTML5', true);
  
?>