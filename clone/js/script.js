 var a=0,flag=0;    
      $(document).ready(function(){
        setInterval(function() {   
		$.getJSON( "main.php", function( json ) {
            if(flag==0){
           for(indexElement=0;indexElement<json.length;indexElement++){
               flag=1;
         $( "#Element" ).append( $('<li id=row'+indexElement+" "+'class= "list-group-item">'+json[indexElement].url+'<p class="pull-right"> <span class="label label-success">'+json[indexElement].http_code+'</span> </p> </li>') );
           }
            }
		
             else{
                 for(refreshLoop=0;refreshLoop<=json.length-1;refreshLoop++){
                     if(json[refreshLoop].http_code<300){
                         
                     
                     
                     $("#row"+refreshLoop).html('<li class= "list-group-item">'+json[refreshLoop].url+'<p class="pull-right"> <span class="label label-success">HTTP_CODE: '+json[refreshLoop].http_code+'</span>  </p>'+'<p class="pull-right"><span class="label label-primary">Time_Elapsed: '+json[refreshLoop].total_time+'</span> </p> </li>');
                     
                         
                     }
                      if(json[refreshLoop].http_code>=300&&json[refreshLoop].http_code<400){
                         
                     
                     
                     $("#row"+refreshLoop).html('<li class= "list-group-item">'+json[refreshLoop].url+'<p class="pull-right"> <span class="label label-warning">HTTP_CODE: '+json[refreshLoop].http_code+'</span>  </p>'+'<p class="pull-right"><span class="label label-primary">Time_Elapsed: '+json[refreshLoop].total_time+'</span> </p> </li>');
                     
                         
                     }
                     if(json[refreshLoop].http_code>=400&&json[refreshLoop].http_code<500){
                         
                     
                     
                     $("#row"+refreshLoop).html('<li class= "list-group-item">'+json[refreshLoop].url+'<p class="pull-right"> <span class="label label-default">HTTP_CODE: '+json[refreshLoop].http_code+'</span>  </p>'+'<p class="pull-right"><span class="label label-primary">Time_Elapsed: '+json[refreshLoop].total_time+'</span> </p> </li>');
                     
                         
                     }
                     if(json[refreshLoop].http_code>=500){
                         
                     
                     
                     $("#row"+refreshLoop).html('<li class= "list-group-item">'+json[refreshLoop].url+'<p class="pull-right"> <span class="label label-danger">HTTP_CODE: '+json[refreshLoop].http_code+'</span>  </p>'+'<p class="pull-right"><span class="label label-primary">Time_Elapsed: '+json[refreshLoop].total_time+'</span> </p> </li>');
                     
                         
                     }
                     
                     
                 }
                 refreshLoop=0;
             }           
            });
           }, 5000);
          
   });