
$(function(){


//! PRODUCT FILTER

function toggleProductFilter(){
	$('.product-filter-overlay').toggleClass('active');
	$('body').toggleClass('noscroll');
}

$('.product-filter').click((e) => e.stopPropagation())

$('.product-wrapper .filter-button-container button, .product-filter .filter-close, .product-filter-overlay').click(toggleProductFilter);

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



//!
})




