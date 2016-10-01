<?php

require_once('service/status-service.php');
require_once('controller/status-controller.php');

$service = new StatusService();
$controller = new StatusController($service);
$controller->controller_response();
?>