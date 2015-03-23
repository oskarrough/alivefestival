<script type="text/javascript" src="PERCH_LOGINPATH/addons/plugins/editors/ckeditor/ckeditor.js"></script>
<script type="text/javascript" charset="utf-8"> 
CKEDITOR.config.filebrowserUploadUrl = 'PERCH_LOGINPATH/addons/plugins/editors/ckeditor/uploader.php?filetype=file';
CKEDITOR.config.filebrowserImageUploadUrl = 'PERCH_LOGINPATH/addons/plugins/editors/ckeditor/uploader.php?filetype=image';
CKEDITOR.on('instanceReady',function(e){
	var editor = e.editor;	
	var textarea = $('#'+editor.name);
	var config = '';

	config += '&width=' 	+(textarea.attr('data-width')||'');
	config += '&height=' 	+(textarea.attr('data-height')||'');
	config += '&crop='		+(textarea.attr('data-crop')||'');
	config += '&density='	+(textarea.attr('data-density')||'');
	config += '&sharpen='	+(textarea.attr('data-sharpen')||'');
	config += '&quality='	+(textarea.attr('data-quality')||'');
	config += '&bucket='	+(textarea.attr('data-bucket')||'default');

	editor.config.filebrowserImageUploadUrl += config;
	editor.config.filebrowserUploadUrl 		+= '&bucket=' +(textarea.attr('data-bucket')||'default');
});


$(function() {
	$('textarea.ckeditor').wrap('<div class="editor-wrap" style="float:left;"></div>');
});
</script> 
