$(document).ready(function(){

	$('.trace').on('click', function(){
	   //    $('#text').addClass('animated delay infinite swing ');   
	   // //  $('#block').addClass('animated delay infinite jackInTheBox'); 
    //       $('#d').addClass('animated jackInTheBox');
    //        $('#bounce').addClass('animated delay  infinite heartBeat');
		$('#page-1').hide();
		$('#page-2').show();

        
      



     setTimeout(function(){
        
          $(".Expected-delivery").css('visibility', 'visible');
          $('').addClass('animated delay ');      


       }, 2000);

          setTimeout(function(){
         $("#myProgress").css('visibility', 'visible');
          $('#myProgress').addClass('animated delay');      
                      var i = 0;
// function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 50);
    function frame() {
      if (width >= 75) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
// }
    var count = 0;
       }, 2500);

          
    

         setTimeout(function(){
        $(".tick-1").css('visibility', 'visible');
          $('.tick-1').addClass('animated delay ');  
         },3500);

     setTimeout(function(){
           $(".tick-2").css('visibility', 'visible');
          $('.tick-2').addClass('animated delay ');      
       },5000); 

        setTimeout(function(){
            $(".cross").css('visibility', 'visible');
          $('.cross').addClass('animated delay');      
       }, 6000);

  setTimeout(function(){
          $('.final').removeClass('d-none');
          $('.final').addClass('animated delay bounceIn');      
       }, 7000);


	}); 




            //three days before date
        var date=new Date();
    var months=["JAN","FEB","MAR","APR","MAJ","JUN","JUL",
      "AUG","SEP","OKT","NOV","DEC"];
      var val=date.getDate()-3+" "+months[date.getMonth()]+" "+date.getFullYear();
      $(".three-days-before").html(val);

      //two days before date
        var date2=new Date();
    var months2=["JAN","FEB","MAR","APR","MAJ","JUN","JUL",
      "AUG","SEP","OKT","NOV","DEC"];
      var val2=date2.getDate()-2+" "+months2[date2.getMonth()]+" "+date2.getFullYear();
      $(".two-days-before").html(val2);

       //one days before date
        var date3=new Date();
    var months3=["JAN","FEB","MAR","APR","MAJ","JUN","JUL",
      "AUG","SEP","OKT","NOV","DEC"];
      var val3=date3.getDate()-1+" "+months3[date3.getMonth()]+" "+date3.getFullYear();
      $(".one-days-before").html(val3);


      //two days ahead date
        var date4=new Date();
    var months4=["JAN","FEB","MAR","APR","MAJ","JUN","JUL",
      "AUG","SEP","OKT","NOV","DEC"];
      var val4=date4.getDate()+2+" "+months4[date4.getMonth()]+" "+date4.getFullYear();
      $(".two-days-ahead").html(val4);

      //six days before date
        var date5=new Date();
    var months5=["JAN","FEB","MAR","APR","MAJ","JUN","JUL",
      "AUG","SEP","OKT","NOV","DEC"];
      var val5=date5.getDate()+24+" "+months5[date5.getMonth()-1]+" "+date5.getFullYear();
      $(".six-days-before").html(val5);


     }); 





