$(".menuMobile__trigger").click(function(event){
    event.preventDefault();
    $(".menuMobile__list").toggleClass("active");
});
$(".menu__item").click(function(){
    $(".menuMobile__list").removeClass("active");
});