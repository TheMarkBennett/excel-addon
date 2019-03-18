$(document).ready(function(){

var $term = 'gems-2017';

update_pages_on_change($term);

$('.gems-past').on('click', 'li a', function() {
     console.log($(this).attr('class'));
    $term = $(this).attr('class');
     update_pages_on_change($term);


});



});





function update_pages_on_change($term){

  var $post_type = 'person';
  //console.log(post_type); cpt_template-admin-js

$('#gems-archive').fadeOut(500).delay(500).empty();


	$.ajax({
			 url: gems_ajax_object.ajax_url,
			 type: 'post',
			 data: {
					 'action':'load_gems_ajax',
					 'post_type': $post_type,
           'slug': $term,
			 },
			 success: function( response ) {					
					 $('#gems-archive').hide().append(response).fadeIn(1000);
			 },
	 });
 }
