
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
		scrollContainer.scrollLeft() === 0 && $('.left-white-shadow').removeClass('active')

		scrollContainer.scrollLeft() + scrollContainer.innerWidth() === scrollContainer[0].scrollWidth ? $('.right-white-shadow').removeClass('active') : $('.right-white-shadow').addClass('active')
    }
  })
})
observer.observe(productHeaderBlock[0])

scrollContainer.on('scroll', () => {
    if (scrollContainer[0].scrollWidth > scrollContainer.innerWidth()) {
        
        scrollContainer.scrollLeft() + scrollContainer.innerWidth() === scrollContainer[0].scrollWidth ? $('.right-white-shadow').removeClass('active') : $('.right-white-shadow').addClass('active')

        scrollContainer.scrollLeft() === 0 ? $('.left-white-shadow').removeClass('active') : $('.left-white-shadow').addClass('active')
    } else {        
        $('.right-white-shadow').removeClass('active')
        $('.left-white-shadow').removeClass('active')
    }
})

window.addEventListener('resize', () => {
	scrollContainer.scrollLeft() + scrollContainer.innerWidth() === scrollContainer[0].scrollWidth ? $('.right-white-shadow').removeClass('active') : $('.right-white-shadow').addClass('active')
});



//! INSTALLATION MODULE FORM

const $formInstallationBlock = $('.installation-module-form .form-wrapper');
$formInstallationBlock.html('<form id="installation-form" role="form">' + $formInstallationBlock.html() + '</form>');

const formInstallationModule = document.querySelector('#installation-form')

function validateWebsiteAddress(webAddres) {
	const urlRegex = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,}){1,}$/;

	return urlRegex.test(String(webAddres).toLowerCase());
}
function successFormInstallationModule(form){
	const $input = $(form).find('input');

	$input.closest('.input-wrapper').removeClass('error').addClass('success');
	$input.closest('.input-wrapper').find('.input-info').text('Ваша заявка на установку модуля принята!');

}
function sendAjaxFormInstallationModule(form) {
	const $form = $(form),
		_btn = $(".button-wrapper button", $form),
		data = $form.serializeJSON();

	if (_btn.hasClass('btn-frm-sended')) {
		return;
	}

	_btn.addClass('btn-frm-sended');

	data['lead_title'] = 'Заявка на установку модуля';

	$.ajax({
		url: "#",
		method: "POST",
		data: data
	}).always(function (dataResult) {
		_btn.removeClass('btn-frm-sended');
		successFormInstallationModule(form)
	});
}

formInstallationModule.onsubmit = (event) => {
	event.preventDefault()

	const input = event.target.querySelector('input')

	if (input.value.trim() === '') {
		input.closest('.input-wrapper').classList.add('error')
		input.closest('.input-wrapper').querySelector('.input-info').innerText = 'Пожалуйста, введите адрес сайта!'
	}else{
		if(!validateWebsiteAddress(input.value.trim())){
			input.closest('.input-wrapper').classList.add('error')
			input.closest('.input-wrapper').querySelector('.input-info').innerText = 'Пожалуйста, введите корректный адрес сайта! \n Пример: http://www.site.ru'
		}else{
			sendAjaxFormInstallationModule(formInstallationModule)
		} 
	}	
}

document.querySelector('[data-action="clean-input"]').addEventListener('click', (e) => {
	e.target.closest('form').querySelector('input').value = ''
})





//!
})




