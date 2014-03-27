<?php
    # Side panel
    echo $HTML->side_panel_start();

    echo $HTML->para('Make any edits required to make this comment suitable to be published on the website.');

    echo $HTML->side_panel_end();
    
    
    # Main panel
    echo $HTML->main_panel_start(); 
        include('_subnav.php');    

        echo $HTML->heading1('Editing a Comment');



        if ($message) echo $message;    
        
    
        echo $HTML->heading2('Comment details');
    
        echo $Form->form_start('content-edit', 'magnetic-save-bar');
    
            //echo $Form->text_field('commentName', 'Name', isset($details['commentName'])?$details['commentName']:false);
            //echo $Form->text_field('commentEmail', 'Email', isset($details['commentEmail'])?$details['commentEmail']:false);
            //echo $Form->text_field('commentURL', 'URL', isset($details['commentURL'])?$details['commentURL']:false);

    		//echo $Form->date_field('commentDateTime', 'Date', isset($details['commentDateTime'])?$details['commentDateTime']:false, true);

    		//echo $Form->textarea_field('commentHTML', 'Comment', isset($details['commentHTML'])?$details['commentHTML']:false);
		      PerchUtil::debug($details);

            echo $Form->fields_from_template($Template, $details);
		
    		$opts = array();
    		$opts[] = array('label'=>'', 'value'=>'');
    		$opts[] = array('label'=>'Live', 'value'=>'LIVE');
    		$opts[] = array('label'=>'Spam', 'value'=>'SPAM');
    		$opts[] = array('label'=>'Rejected', 'value'=>'REJECTED');
    		$opts[] = array('label'=>'Pending', 'value'=>'PENDING');
    		    		
    		echo $Form->select_field('commentStatus', 'Status', $opts, isset($details['commentStatus'])?$details['commentStatus']:false);
		

            echo $Form->submit_field('btnSubmit', 'Save', $API->app_path());

        echo $Form->form_end();
    
        
    echo $HTML->main_panel_end();

    
?>