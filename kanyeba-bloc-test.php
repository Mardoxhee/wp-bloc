<?php
/**
 * Plugin Name:       Bloc kanyeba
 * Description:       Test de bloc voila
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            mardochee luviki
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       kanyeba-bloc-test
 *
 * @package           kanyeba-bloc-test
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function kanyeba_bloc_test_kanyeba_bloc_test_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'kanyeba_bloc_test_kanyeba_bloc_test_block_init' );
