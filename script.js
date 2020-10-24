$(document).ready(function(){

    // Variables

    let burger = $('.header__burger');
    let menu = $('.header__nav ul');
    let firstSpan = $('.header__burger span:first-child');
    let secondSpan = $('.header__burger span:nth-child(2)');
    let thirdSpan = $('.header__burger span:last-child');

    let headerDate = $('.header__date');
    let searchButton = $('.header__search-button-mobile');
    let searchForm = $('.header__search-form');
    let searchInput = $('.header__search-input');


    
    // Burger button animation

    burger.on('click', function(event){
        event.preventDefault();

        firstSpan.toggleClass('span-rotated-1');
        secondSpan.toggleClass('span-deleted');
        thirdSpan.toggleClass('span-rotated-2');
        
        menu.toggleClass('ul-opened');
    });



    // Change "Вторник" to "Вт"

    let windowWidth = $(window).width();

    if (windowWidth <= 768) {
        headerDate.text('19 июня, Вт');
        searchForm.addClass('header__search-form-hide ');
        searchButton.addClass('header__search-button-mobile-visible');
        searchInput.addClass('header__search-input-hide');
    } else {
        headerDate.text('19 июня, вторник');
        searchForm.removeClass('header__search-form-hide ');
        searchButton.removeClass('header__search-button-mobile-visible');
        searchInput.removeClass('header__search-input-hide');
    };

    

    // Change "Вторник" to "Вт" on window resize
    
    $(window).on('resize', function(){
        let windowWidth = $(window).width();

        if (windowWidth <= 768) {
            headerDate.text('19 июня, Вт');
            searchForm.addClass('header__search-form-hide ');
            searchButton.addClass('header__search-button-mobile-visible');
            searchInput.addClass('header__search-input-hide');
        } else {
            headerDate.text('19 июня, вторник');
            searchForm.removeClass('header__search-form-hide ');
            searchButton.removeClass('header__search-button-mobile-visible');
            searchInput.removeClass('header__search-input-hide');
        }
    });



    // Show the search field on mobile devices

    searchButton.on('click', function(event){   
        searchForm.removeClass('header__search-form-hide');
        searchInput.removeClass('header__search-input-hide');
    });

    

    //Hide the search field when the click is not on it

    $(document).mouseup(function (e){ 
		if (!searchForm.is(e.target) && searchForm.has(e.target).length === 0) { 
            searchForm.addClass('header__search-form-hide');
            searchInput.addClass('header__search-input-hide');
		}
	});

});
