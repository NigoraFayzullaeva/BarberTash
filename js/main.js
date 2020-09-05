// $(function () {


//     $('.menu-btn').on('click', function(){
//         $('ul').fadeIn(1000);
//     });

// });

$('.menu-btn, .menu').click(function () {
    if ($('.menu').is(':hidden')) {
        $('.menu').show('slideToggle');
    } else {
        $('.menu').hide('slideToggle');
    }
});

// video slider
function videoUrl(hmmmmmm){
    document.getElementById("slider").src = hmmmmmm;
}
