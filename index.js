
$(function(){

    $('.menu-nav-item .link a').click(function(e){
        $('.menu-nav-item').removeClass('active');
        $(e.target).closest('.menu-nav-item').addClass('active');        
    })
    
    $('.menu-mobile .menu-nav-item .sub-menu a').click(function(e){
        toggleMenuMobile()     
    })

    function toggleMenuMobile(){
        $('.menu-icon').toggleClass('menu-icon-active');
        $('.menu-mobile-overlay').toggleClass('active');
        $('body').toggleClass('noscroll');
    }

    $('.menu-icon-wrapper').click(function() {
        toggleMenuMobile()
      });
      
})
