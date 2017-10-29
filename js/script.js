$('.menuClickZone').on('click', function (event) {
    event.preventDefault();
    if( $('.menuswitch').hasClass('plus') ){
        
        TweenMax.staggerFrom('.s-btn',.05, {y:10}, 0.05);
        
        $('.s-btn-container').removeClass('menuVis');
        $('.menuswitch').toggleClass('plus');
    }
    else {
        $('.s-btn-container').addClass('menuVis');
        $('.menuswitch').toggleClass('plus');
    }
    
});
$(document).bind("contextmenu", function(event) { 
    event.preventDefault();
    $('.custom-menu').remove();
    $("<div class='custom-menu'>Custom menu</div>")
        .appendTo("body")
        .css({top: event.pageY + "px", left: event.pageX + "px"});
}).bind("click", function(event) {
    $("div.custom-menu").hide();
});