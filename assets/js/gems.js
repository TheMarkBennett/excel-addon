$(document).ready(function(){

update_pages_on_change();

$('.gems-past').on('click', 'li', function() {
     console.log($(this).html());
});



});





function update_pages_on_change(){

  var $post_type = 'person';
  //console.log(post_type); cpt_template-admin-js

	$.ajax({
			 url: ajaxurl,
			 type: 'post',
			 data: {
					 'action':'more_post_ajax',
					 'post_type': $post_type
			 },
			 success: function( response ) {
					 console.log(response);
					 $('#acf-field_5c710f16c0868').append(response)
			 },
	 });
 }
