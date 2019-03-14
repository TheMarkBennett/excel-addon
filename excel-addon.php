<?php
/**
 * Plugin Name: Excel addons
 * Plugin URI: https://excel.ucf.edu
 * Description: Adds features to the excel theme
 * Version: 1.0
 * Author: Mark Bennett
 * Author URI: https://excel.ucf.edu
 */


 //include gems shortcode
// include( plugin_dir_path( __FILE__ ) . 'include/gems-shortcode.php');


 //Include ACF Javascript
 function gems_enqueue_scripts() {

 	wp_enqueue_script( 'gems_js', plugin_dir_url( __FILE__ ) . 'assets/js/gems.js', array(), '1.0.0', true );
   wp_localize_script('gems_js', 'gems_ajax_object',
      array(
          'ajax_url' => admin_url('admin-ajax.php'),

      )
 );

 }

 add_action('wp_enqueue_scripts', 'gems_enqueue_scripts'); //add javascript to the admin ares


 function load_gems_ajax(){
        $post_type = $_POST["post_type"];
    header("Content-Type: text/html");

    $counter = 1;


    $args = array(
        'post_type' => 'person',
        'posts_per_page' => 3,
    );

    $loop = new WP_Query($args);
		ob_start();?>
    <div class="row">
      <?php

    while ($loop->have_posts()) { $loop->the_post(); ?>

			<div class="post-<?php the_ID(); col ?> gems-person"><?php the_title(); ?></div>

      <?php  if($counter % 4 == 0){?>
      </div>
        <div class="row">

<?php
}

}?>

</div>

<?php

		$posts_html = ob_get_contents(); // we pass the posts to variable
   		ob_end_clean(); // clear the buffer

			echo $posts_html;


    exit;
}

add_action('wp_ajax_nopriv_load_gems_ajax', 'load_gems_ajax');
add_action('wp_ajax_load_gems_ajax', 'load_gems_ajax');
