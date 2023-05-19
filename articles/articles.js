
$(function(){

//! ARTICLES FILTER

function toggleArticlesFilter(){
	$('.articles .filter-overlay').toggleClass('active');
	$('body').toggleClass('noscroll');
}
$('.filter-list-wrapper').click((e) => e.stopPropagation())  

$('.articles .filter-button-container button, .articles .filter-overlay .filter-close, .articles .filter-overlay').click(() => toggleArticlesFilter);

$('.articles .filter-item a').click((e) => $(e.target).closest('.filter-overlay').hasClass('active') && toggleArticlesFilter())


//!
})




