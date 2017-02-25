$(document).ready(function(){
    $('.owl-carousel').owlCarousel(
        {
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            autoplay: true
        }
    );
});

$(document).ready(function(){
  $("#menu").click(function(){
    $(".sp_menu_toggle").slideToggle();
  });
});
$(document).ready(function(){
  $(".linktitle2").click(function(){
    $(".categories_li").slideToggle();
  });
});

$(window).load(function(){
  $("#list_img img").click(function(){
    var img_src = $(this).attr("src");
    $("#display_img img").attr("src", img_src);
  });
});

$(document).ready(function() {
  var pagetop = $('.pagetop');
    $(window).scroll(function () {
       });
       pagetop.click(function () {
           $('body, html').animate({ scrollTop: 0 }, 500);
              return false;
   });
});
