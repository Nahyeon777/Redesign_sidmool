$(document).ready(function () {

    // let bar = new ProgressBar.Line("#pro1",{
    //     strokeWidth: 0.3,
    //     color: "white",
    //     easing: 'linear',
    //     step: function(state, circle){
    //         circle.setText(Math.round(circle.value()*100))
    //     },
    //     svgStyle: {
    //         display: 'block',
    //         animationDirection: 'reverse',
    //         // Important: make sure that your container has same
    //         // aspect ratio as the SVG canvas. See SVG canvas sizes above.
    //         width: '100%'
    //     },
    // }) 
    // bar.set(2)
    // bar.animate(1.0)
    // // line-animation

    $(".slick").slick({
        dots: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        // autoplay: true,
        speed: 1000
    })

    $(".item-wrap").slick({
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover:true,
        draggable : true,
    })

});