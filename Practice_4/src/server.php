<?php
$_POST = json_decode(file_get_contents("php://input"), true); // для обробки JSON формата php
echo var_dump($_POST);
