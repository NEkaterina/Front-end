$(function(){

   $('.b-js-sliderBlock').slick({
    	 arrows: true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    arrows: false
                }
            }
        ]
    });
 $(".b-mainContent__content").mCustomScrollbar({
        axis:"x",
        theme:"dark"
    });

    videojs('#js-video' , {
        controls: true,
        autoplay: false,
        width: 313,
        height: 231,
        preload: 'auto',
        poster: '../../assets/images/poster-small.png'
    });


  videojs('.js-video' , {
        controls: true,
        autoplay: true,
        aspectRatio: '16:9',
        autoHeight: true,
        preload: 'auto'
    });
});
