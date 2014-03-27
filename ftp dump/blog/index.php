<?php include($_SERVER['DOCUMENT_ROOT'].'/perch/runtime.php'); ?>

<?php perch_layout('global.top'); ?>

<div class="Box">
  <h1 class="PageTitle"><span>Nyheder</span></h1>

  <!-- this is an example blog homepage showing a simple call to perch_blog_recent_posts()

  Posts are displayed using the templates stored in perch/apps/perch_blog/templates/blog you can edit these as you wish, making sure that the paths used in these templates are correct for your installation.
  -->
  <?php perch_blog_recent_posts(10); ?>

 <!--  <p><a href="archive.php">More posts</a></p> -->

  <!-- <h2>Archive</h2> -->
  <!-- The following functions are different ways to display archives. You can use any or all of these.

  All of these functions can take a parameter of a template to overwrite the default template, for example:

  perch_blog_categories('my_template.html');

  -->
  <!--  By category listing -->
  <?php #perch_blog_categories(); ?>
  <!--  By tag -->
  <?php #perch_blog_tags(); ?>
  <!--  By year -->
  <?php #perch_blog_date_archive_years(); ?>
  <!--  By year and then month - can take parameters for two templates. The first displays the years and the second the months see the default templates for examples -->
  <?php #perch_blog_date_archive_months(); ?>
</div>

<?php perch_layout('global.footer'); ?>
