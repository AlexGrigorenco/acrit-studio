
$(function(){


//! PRODUCT FILTER

function toggleProductFilter(){
	$('.product-filter-overlay').toggleClass('active');
	$('body').toggleClass('noscroll');
}

$('.product-filter').click((e) => e.stopPropagation())

$('.product-wrapper .filter-button-scrollContainer button, .product-filter .filter-close, .product-filter-overlay').click(toggleProductFilter);

$('.product-sub-filter a').click((e) => $(e.target).closest('.product-filter-overlay').hasClass('active') && toggleProductFilter())



//! PRODUCT SLIDER

$('.product__screenshots__slider').bxSlider({
	pager: false,
	controls: true,
	maxSlides: 4,
	minSlides: 1,
	slideMargin: 38,
	slideWidth: 'auto',
	nextText: `<span></span>`,
	prevText: `<span></span>`,
	touchEnabled: false,
}); 

Fancybox.bind('[data-fancybox]', {
  //
});


//! PRODUCT TABS

$('.product__tabs .tab-item').click((e) => {
	let tab = $(e.target).data('tab')

	$('[data-tab]').removeClass('active');
	$(`[data-tab="${tab}"]`).addClass('active');
});


//! INFO PRODUCT FIXED BLOCK


const productHeaderBlock = $('.product__header');
const infoProductFixedBlock = $('.info-product-fixed-block')
const scrollContainer = $('.info-product-fixed')

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
        infoProductFixedBlock.removeClass('active')
    } else {
        infoProductFixedBlock.addClass('active')
		scrollContainer.scrollLeft() === 0 && $('.left-white-shadow').css('display', 'none')

		scrollContainer.scrollLeft() + scrollContainer.innerWidth() === scrollContainer[0].scrollWidth ? $('.right-white-shadow').css('display', 'none') : $('.right-white-shadow').css('display', 'block')
    }
  })
})
observer.observe(productHeaderBlock[0])

scrollContainer.on('scroll', () => {
    if (scrollContainer[0].scrollWidth > scrollContainer.innerWidth()) {
        
        scrollContainer.scrollLeft() + scrollContainer.innerWidth() === scrollContainer[0].scrollWidth ? $('.right-white-shadow').css('display', 'none') : $('.right-white-shadow').css('display', 'block')

        scrollContainer.scrollLeft() === 0 ? $('.left-white-shadow').css('display', 'none') : $('.left-white-shadow').css('display', 'block')
    } else {        
        $('.right-white-shadow').css('display', 'none')
        $('.left-white-shadow').css('display', 'none')
    }
})

window.addEventListener('resize', () => {
	scrollContainer.scrollLeft() + scrollContainer.innerWidth() === scrollContainer[0].scrollWidth ? $('.right-white-shadow').css('display', 'none') : $('.right-white-shadow').css('display', 'block')
});






//!
})




