<?php
class StatusService {

    private $url = 'url';
	private $http_code = "http_code";
	private $total_time = "total_time";

    public function __construct(){}
	
	public function create_array_response(){
		$urls_array = parse_ini_file("properties/url-catalog.properties");
		return $this->curl_response($urls_array);
	}

	public function curl_response($urls_array){
		$url_info = array();
		$url_data = array();
		$check_result = array();
		$sequence = 0;
		foreach ($urls_array as $i => $url) {
			$url_data = $this->url_check($url[0], $url[1]);
			$url_info[$this->url] = $url_data[$this->url];
			$url_info[$this->http_code] = $url_data[$this->http_code];
			$url_info[$this->total_time] = $url_data[$this->total_time];
		    $check_result[$sequence] = $url_info;
			$sequence++;
		}
        return $check_result;
    }

	function url_check($url, $method) {
        $curl_config = @curl_init($url);
        @curl_setopt($curl_config, CURLOPT_HEADER, TRUE);
        @curl_setopt($curl_config, CURLOPT_NOBODY, TRUE);
        @curl_setopt($curl_config, CURLOPT_FOLLOWLOCATION, FALSE);
        @curl_setopt($curl_config, CURLOPT_RETURNTRANSFER, TRUE);
        @curl_setopt($curl_config, CURLOPT_SSL_VERIFYPEER, FALSE);     
		@curl_setopt($curl_config, CURLOPT_SSL_VERIFYHOST, 2);
		if ($method == "POST")
            @curl_setopt($curl_config, CURLOPT_POST, 1);
			
        curl_exec($curl_config);
		$curl_info_response = curl_getinfo($curl_config);
        return $curl_info_response;
    }
}
?>