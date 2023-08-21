
$('.slider-princial').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,

});

const btn = document.getElementById("btnTop")
btn.addEventListener("click", function(){
    window.scrollTo(0,0)
})

document.addEventListener('scroll',ocultar)

function ocultar(){
    if(window.scrollY >10){
    btn.style.display = "flex"
}else {
    btn.style.display = "none"
}
}

ocultar()