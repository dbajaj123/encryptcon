<?php
$script = __DIR__ . DIRECTORY_SEPARATOR . "main.py";
$result = shell_exec("python $script");
echo "$result";

?>