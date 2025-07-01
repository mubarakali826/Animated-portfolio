(function ($) {
	"use strict";

    jQuery(document).ready(function($){




        $('.post__btns').click( function (){
                  
                $('.post__btns, .post__box').toggleClass('activee');  
                $('.post__btns, .post__box').toggleClass('toggle');  
                  
        });

        $('.note__toggle').click( function (){
                  
                $('.info__box1').toggleClass('activee');  
                $('.note__toggle').toggleClass('toggle');  
                  
        });
        $('.note__toggle2').click( function (){
                  
                $('.info__box2').toggleClass('activee');  
                $('.note__toggle2').toggleClass('toggle');  
                  
        });
        $('.follow__btn1').click( function (){
                  
                $('.follow__btn1').toggleClass('activee');  
                $('.follow__btn1').toggleClass('toggle');  
                  
        });
        $('.follow__btn2').click( function (){
                  
                $('.follow__btn2').toggleClass('activee');  
                $('.follow__btn2').toggleClass('toggle');  
                  
        });

        $(document).ready(function() {
            $('select').niceSelect();
          });
   



    });




}(jQuery));	