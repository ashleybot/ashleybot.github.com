// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(window).scroll(function(){
  if($(window).scrollTop() <= 40){
    $('.top-bar').removeClass('alt');
  }else{
    $('.top-bar').addClass('alt');
  }
});
