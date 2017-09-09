var $bgimg = $(".imgload");
var $img =$(".img");
var $window = $(window);
function loadimg(){
    $bgimg.each(function(){
        if ($(this).attr('data-bg-url')){
            if ($(this).offset().top < ($window.height() + $window.scrollTop()) + 20){
                $(this).css('background-image','url(' + $(this).attr('data-bg-url') + ')');
            }
        }
    });

    $img.each(function(){
    	if ($(this).attr('data-src')){
    		if ($(this).offset().top < ($window.height() + $window.scrollTop()) + 20){
    			$(this).attr("src",$(this).attr('data-src'));
    		}
    	}
    })
}
$window .scroll(loadimg);
$(document).ready(loadimg);