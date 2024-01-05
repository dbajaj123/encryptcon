<?php

// Image URL
$url = $_POST['url'];
echo $url;
// Image path
$img = 't1.jpg';

// Save image
file_put_contents($img, file_get_contents($url));

?>