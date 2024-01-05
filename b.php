<?php

// Image URL
$url = $_POST['imgBase64'];
echo $url;
// Image path
$img = 't2.jpg';

// Save image
file_put_contents($img, file_get_contents($url));

?>