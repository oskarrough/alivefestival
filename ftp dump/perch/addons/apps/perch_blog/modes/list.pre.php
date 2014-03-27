<?php
    
    $HTML = $API->get('HTML');
    
    // Try to update
    if (file_exists('update.php')) include('update.php');
    
    $Blog = new PerchBlog_Posts($API);
    
    $Paging = $API->get('Paging');
    $Paging->set_per_page(15);
    
    $Categories = new PerchBlog_Categories($API);
    $categories = $Categories->all();

	
   
	$Lang = $API->get('Lang');

    $posts = array();
	
    $filter = 'all';
    

    if (isset($_GET['category']) && $_GET['category'] != '') {
        $filter = 'category';
        $category = $_GET['category'];
    }
    

    if (isset($_GET['status']) && $_GET['status'] != '') {
        $filter = 'status';
        $status = $_GET['status'];
    }

    
    switch ($filter) {
        
        case 'category':
            $posts = $Blog->get_by_category_slug_for_admin_listing($category);
            break;

        case 'status':
            $posts = $Blog->get_by_status($status);
            break;

        default:
            $posts = $Blog->all($Paging);
            
            // Install
            if ($posts == false) {
                $Blog->attempt_install();
            }
            
            break;
    }

?>