<?php
    
    $HTML = $API->get('HTML');

	$Form = $API->get('Form');

    $message = false;

    $Comments = new PerchBlog_Comments;
    include(realpath('.').'/../../PerchBlog_Akismet.class.php');


    if (!$CurrentUser->has_priv('perch_blog.comments.moderate')) {
        PerchUtil::redirect($API->app_path());
    }


     if (isset($_GET['id']) && $_GET['id']!='') {
         $commentID = (int) $_GET['id'];    
         $Comment = $Comments->find($commentID);
         $details = $Comment->to_array();
     }else{
         $message = $HTML->failure_message('Sorry, that comment could not be found.');
     }


    $Template   = $API->get('Template');
    $Template->set('blog/comment.html', 'blog');
    $tags = $Template->find_all_tags();

    $Form->set_required_fields_from_template($Template);

     if ($Form->submitted()) {
 		$postvars = array('commentName','commentEmail', 'commentHTML', 'commentStatus', 'commentDateTime', 'commentURL');

     	$data = $Form->receive($postvars);

        $dynamic_fields = $Form->receive_from_template_fields($Template, $details);
        $data['commentDynamicFields'] = PerchUtil::json_safe_encode($dynamic_fields);

        if ($Comment->commentStatus()!=$data['commentStatus']) {
            // status has changed
             
            $Comment->set_status($data['commentStatus']);           
            
        }


        $Comment->update($data);

        if (is_object($Comment)) {
            $message = $HTML->success_message('The comment has been successfully edited.');
        }else{
            $message = $HTML->failure_message('Sorry, that comment could not be edited.');
        }

        
        
     }

     $details = $Comment->to_array();
 
?>