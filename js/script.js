(function() {

var btnBurger = $('.j-nav-toggle');
var mainNav = $('.j-nav-toggle');
var isShown = false;




  // Method to change states which works in IE7+ / IE8+
  var btn = document.querySelector('.j-nav-toggle');

  // asdf
  var toggleState = function(elm, att, one, two) {
    var elm = document.querySelector(elm);
    elm.setAttribute(att, elm.getAttribute(att) === one ? two : one);
  };
  
  // setup
  btn.setAttribute('aria-pressed', 'false');

  // turn active state on or off
  btn.onclick = function(e) {
    console.log('aga');
    toggleState('.j-nav-toggle', 'data-state', 'off', 'on');
    toggleState('.btn-wrapper', 'aria-pressed', 'false', 'true');
    e.preventDefault();
  }

  $('.j-nav-toggle').click(function() {
    $('.j-mobile-nav').toggleClass('is-open');
  });

})();




// $(document).ready(function(){

//   $('.super-select').selectize();

//   var slickIsActive = false;

//   checkSlider();

//   $(window).on('resize', function(){
//     checkSlider();
//   });

//   function checkSlider(){


        // $(window).on("resize", function () {

        // if (window.innerWidth > 320) {

        // $(".slider").slick("unslick");
        // } else {
        // $(".slider").slick({

        // autoplay: true,
        // autoplaySpeed: 500,

        // });








$('.slider').slick({

  autoplay:true,
  autoplaySpeed: 1000,

}
  );




  //   if( $(window).width() < 600 ) {
  //     if( slickIsActive === false ) {
  //       $('#slider').slick({
  //         dots: true,
  //         autoplay: true,
  //         // autoplaySpeed: 500,
  //       });
  //       slickIsActive = true;
  //     }
  //   }
  //   else {
  //     if( slickIsActive === true ) {
  //       $('#slider').slick('unslick');
  //       slickIsActive = false;
  //     }
  //   }
  // }











ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.751574, 37.573856],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/myIcon.gif',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

        myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
            hintContent: 'Собственный значок метки с контентом',
            balloonContent: 'А эта — новогодняя',
            iconContent: '12'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/ball.png',
            // Размеры метки.
            iconImageSize: [48, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
});