 $(function () { 
      setTimeout(function(){
         $("#splash").hide();
         $("#cadastrar").show();
      }, 10);

      $('#login').on('show.bs.collapse', function () {
         $('#cadastrar').hide();
      });

      $('#cats').on('show.bs.collapse', function () {
         updateCatList(getCatsMock ());
        $('#login').hide();
      });

      $('#borges').on('show.bs.collapse', function () {
        $('#cats').hide();
      });

      $('#christie').on('show.bs.collapse', function () {
        $('#cats').hide();
      });

      $('#pessoa').on('show.bs.collapse', function () {
        $('#cats').hide();
      });

      $('#adicionar').on('show.bs.collapse', function () {
        $('#cats').hide();
      });
      
        $('#enroll').on('show.bs.collapse', function () {
         $('#cadastrar').hide();
      });
        $('#enrollFinish').on( "click", function() {
       if(isEmptyInputText($("#enrollUserName")) &
        isEmptyInputText($("#enrollPassword"))&
        isEmptyInputText($("#enrollAcceptPassword"))&
        isEmptyInputText($("#enrollEmail"))&
        isEmptyInputText($("#enrollAcceptEmail"))){
         $('#enroll').hide();
         $('#login').show();
       }




     });

         function isEmptyInputText (obj){
            $("#"+obj.attr('id') +"Img").remove();
            if (obj==undefined || obj==null || $.trim(obj.val()).length==0){
               obj.parent().append('<img id = "'+ obj.attr('id') +'Img" src="img/errado.png" class="img-responsive img-valida-form" />');
               return false;
            }else{
               obj.parent().append('<img id = "'+ obj.attr('id') +'Img" src="img/certo.png" class="img-responsive img-valida-form" />');
               return true;
            }
         }

   });