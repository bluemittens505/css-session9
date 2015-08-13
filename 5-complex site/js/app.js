   var menu = $("nav ul");

    $("#pull").on("click", function(e){
      e.preventDefault();
      menu.slideToggle();
    });

    $(window).resize(function(){
      var w = $(this).width();
      // without the if, lose menu when expand browser
      if( w > 600 && menu.is(":hidden")) {
        menu.removeAttr('style');
      }
      // console.log(w);
    });

    $('.content-video a').on('click',function(e){

      // remove active class on all 3
      $('.content-video a').removeClass('active');
      // add active class to one clicked on
      $(this).addClass('active');

      var videoToPlay = $(this).attr('href');
      $('iframe').attr('src',videoToPlay);

      console.log(videoToPlay);
      // return false;
      e.preventDefault();

    });

    //Accordion for Nav Sub
    // top ul
    $('.nav-sub > li a').on('click', function(e){
      // nested ul's. slide them up
      $('.nav-sub ul').slideUp();
      // next item after the anchor tag
      $(this).next().slideToggle();
      //console.log(this);
      //return false;
      e.preventDefault();
    });

    // thumbnails behavior
    $('.image-tn a').on('click', function(){
      // grabs href from image
      var imgsrc = $(this).attr('href');
      // traverse DOM to find title of img
      // could have used next() here too
      var titleText = $(this).find('img').attr('title');
      $('.content-slider > img').attr('src',imgsrc);
      $('.caption').html(titleText);
      return false;
    });


