
$(function(){
    $.fn.serializeJSON = function () {
		let data = {};
		function buildInputObject(arr, val) {
			if (arr.length < 1)
				return val;
			let objkey = arr[0];
			if (objkey.slice(-1) == "]") {
				objkey = objkey.slice(0,-1);
			}
			let result = {};
			if (arr.length == 1){
				result[objkey] = val;
			} else {
				arr.shift();
				let nestedVal = buildInputObject(arr,val);
				result[objkey] = nestedVal;
			}
			return result;
		}
		$.each(this.serializeArray(), function() {
			let val = this.value;
			let c = this.name.split("[");
			let a = buildInputObject(c, val);
			$.extend(true, data, a);
		});
		return data;
	};

	//! SUBSCRIPTION

    const $formSubscriptionBlock = $('.subscription-wrapper');
	$formSubscriptionBlock.html('<form id="subscription-form" class="subscription" role="form">' + $formSubscriptionBlock.html() + '</form>');

    const formSubscribtion = document.querySelector('#subscription-form')

    function sendAjaxFormSubscription(form) {
		const $form = $(form),
			_btn = $(".button-wrapper button", $form),
			data = $form.serializeJSON();

		if (_btn.hasClass('btn-frm-sended')) {
			return;
		}

		_btn.addClass('btn-frm-sended');

		data['lead_title'] = 'Подписка на рассылку';

		$.ajax({
			url: "#",
			method: "POST",
			data: data
		}).always(function (dataResult) {
			_btn.removeClass('btn-frm-sended');
			successSubmit(form);
		});
	}

    function validateEmail(email) {
		let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}

    function setErrorMessage(element, className, errorMessage, parent) {
		if (!parent.querySelector('span')) {
			const error = document.createElement(element)

			error.classList.add(className)
			error.innerText = errorMessage
			parent.appendChild(error)
		}
		parent.classList.add('error')
	}

	function removeErrorMessage(parent) {
		parent.querySelector('span') ? parent.querySelector('span').remove() : null
		parent.classList.remove('error')
	}

    function successSubmit(form) {
        const input = $(form).find('input');
        const message = $('<div>').addClass('success-submit').text('Спасибо! Вы подписались на нашу рассылку.');
        
        input.hide();
        input.parent().append(message);
        $(form).find('button').prop('disabled', true);
    }


    formSubscribtion.onsubmit = (event) => {
		event.preventDefault()

        const input = event.target.querySelector('input')

        input.value.trim() === '' ? setErrorMessage('span', 'error-message', 'Введите ваш email', input.parentElement) : removeErrorMessage(input.parentElement)

        if (!validateEmail(input.value)) {
            setErrorMessage('span', 'error-message', 'Введите пожалуйста корректный email', input.parentElement)
        }else{
            removeErrorMessage(input.parentElement)
            sendAjaxFormSubscription(formSubscribtion)
        }
    }


//! SEARCH FORM */


const $formSearchBlock = $('.top-bar-search-wrapper');
$formSearchBlock.html('<form id="search-form" role="form">' + $formSearchBlock.html() + '</form>');

const formSearch = document.querySelector('#search-form')

function toggleSearch(){
	$('.top-bar .logo-wrapper').toggleClass('remove-margin')
	$('.search').toggleClass('hidden')
	$('.top-bar .phone').toggleClass('hidden');
	$('.top-bar .email').toggleClass('hidden');
	$('.top-bar-search-wrapper').toggleClass('show');
}
function sendAjaxFormSearch(form) {
	const $form = $(form),
		_btn = $(".button-wrapper button", $form),
		data = $form.serializeJSON();

	if (_btn.hasClass('btn-frm-sended')) {
		return;
	}

	_btn.addClass('btn-frm-sended');

	$.ajax({
		url: "#",
		method: "POST",
		data: data
	}).always(function (dataResult) {
		_btn.removeClass('btn-frm-sended');
		toggleSearch()
	});
}

$('#show-search').click(function(){
	toggleSearch()
})

formSearch.onsubmit = (event) => {
	event.preventDefault()

	const input = event.target.querySelector('input')

	if (input.value.trim() === '') {
		console.log('dsfdh')
		input.parentElement.classList.add('error')
	}else{
		input.parentElement.classList.remove('error')
		input.value = ''
		sendAjaxFormSearch(formSearch)
	}
}

    //! MENU MOBILE

    $('.menu-nav-item .link a').click(function(e){
        $('.menu-nav-item').removeClass('active');
        $(e.target).closest('.menu-nav-item').addClass('active');        
    })

	function toggleMenuMobile(){
        $('.menu-icon').toggleClass('menu-icon-active');
        $('.menu-mobile-overlay').toggleClass('active');
        $('body').toggleClass('noscroll');
    }

	$('.menu-mobile-wrapper').click((e) => e.stopPropagation()) 
    
    $('.menu-mobile .menu-nav-item .sub-menu a, .menu-burger-wrapper, .menu-mobile-overlay').click(toggleMenuMobile);


//! BRAEDCRUMB

$('.breadcrumb__item').each((index, item) => (index === $('.breadcrumb__item').length - 1) ? $(item).addClass('last') : null)

$('.breadcrumb__list').scrollLeft($('.breadcrumb__list').get(0).scrollWidth - $('.breadcrumb__list').get(0).clientWidth);


//! ARTICLES FILTER

function toggleFilter(){
	$('.filter-overlay').toggleClass('active');
	$('body').toggleClass('noscroll');
}
$('.filter-list-wrapper').click((e) => e.stopPropagation())  

$('.filter-button-container button, .filter-overlay .filter-close, .filter-overlay').click(toggleFilter);

$('.filter-item a').click((e) => $(e.target).closest('.filter-overlay').hasClass('active') && toggleFilter())

//!
})




