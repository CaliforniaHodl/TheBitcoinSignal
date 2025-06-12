$('.toggle-menu').on('click', e =>{
    e.preventDefault();
    $('body').toggleClass('mobile-menu-active');
})