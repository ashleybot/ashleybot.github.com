// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(window).scroll(function(){
  if($(window).scrollTop() <= 40){
    $('#nav').removeClass('alt');
  }else{
    $('#nav').addClass('alt');
  }
});
