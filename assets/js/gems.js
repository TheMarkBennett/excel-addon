$(document).ready(function(){

var $term = 'gems-2018';

update_pages_on_change($term);

$('.gems-past').on('click', 'li', function() {
     console.log($(this).attr('class'));
    $term = $(this).attr('class');
     update_pages_on_change($term);


});



});





function update_pages_on_change($term){

  var $post_type = 'person';
  //console.log(post_type); cpt_template-admin-js

	$.ajax({
			 url: gems_ajax_object.ajax_url,
			 type: 'post',
			 data: {
					 'action':'load_gems_ajax',
					 'post_type': $post_type,
           'slug': $term,
			 },
			 success: function( response ) {
					 console.log(response);
					 $('#gems-archive').append(response)
			 },
	 });
 }
