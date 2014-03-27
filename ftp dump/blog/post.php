<?php include($_SERVER['DOCUMENT_ROOT'].'/perch/runtime.php'); ?>

<?php perch_layout('global.top'); ?>

<div class="Box">

  	<?php perch_blog_post(perch_get('s')); ?>
  	<?php #perch_blog_author_for_post(perch_get('s')); ?>

  	<div class="meta">
  		<div class="cats">
  			<?php perch_blog_post_categories(perch_get('s')); ?>
  		</div>
  		<div class="tags">
  			<?php perch_blog_post_tags(perch_get('s')); ?>
  		</div>
  	</div>

  	<?php #perch_blog_post_comments(perch_get('s')); ?>
  	<?php #perch_blog_post_comment_form(perch_get('s')); ?>

  <title><?php perch_blog_post_field(perch_get('s'), 'postTitle'); ?> - Alive Festival Blog</title>

</div>

<?php perch_layout('global.footer'); ?>
