<?php
class StatusController
{
    private $service;

    public function __construct($service) {
        $this->service = $service;
    }
	
	public function controller_response() {
		header('Content-Type: application/json');		
		echo json_encode($this->service->create_array_response());
	}
    
}
?>