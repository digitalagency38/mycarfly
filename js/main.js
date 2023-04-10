document.addEventListener("DOMContentLoaded", function(event) {
      $("ul.tabs__caption").on("click", "li:not(.active)", function() {
        $(this)
          .addClass("active")
          .siblings()
          .removeClass("active")
          .closest("div.tabs")
          .find("div.tabs__content")
          .removeClass("active")
          .eq($(this).index())
          .addClass("active");
      });

      $('.feed1').click(function() {
          $('.form-wrapper.form1').addClass('opened');
          return false;
      });
      $('.feed2').click(function() {
          $('.form-wrapper.form2').addClass('opened');
          return false;
      });
      $('.feed3').click(function() {
          $('.form-wrapper.form3').addClass('opened');
          return false;
      });
      $('.feed4').click(function() {
          $('.form-wrapper.form4').addClass('opened');
          return false;
      });
      $('.feed5').click(function() {
          $('.form-wrapper.form5').addClass('opened');
          return false;
      });
      $('.feed6').click(function() {
          $('.form-wrapper.form6').addClass('opened');
          return false;
      });
      $('.feed7').click(function() {
          $('.form-wrapper.form7').addClass('opened');
          return false;
      });
      $('.feed8').click(function() {
          $('.form-wrapper.form8').addClass('opened');
          return false;
      });
      $('.form-wrapper .icon-close').click(function() {
          $('.form-wrapper').removeClass('opened');
          return false;
      });
      $(document).keydown(function(event){
          if (event.which == 27) {
              $('.form-wrapper').removeClass('opened');
          }
      });
      $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        dots: false,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true
      });


      $('.sertificate_slider').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
        centerPadding: 0,
        prevArrow: '<div class="slider__control" data-slide="prev"></div>',
        nextArrow: '<div class="slider__control" data-slide="next"></div>',
      });
      $('.foto_slid').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
        centerPadding: 0,
        prevArrow: '<div class="slider__control" data-slide="prev"></div>',
        nextArrow: '<div class="slider__control" data-slide="next"></div>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });
      $('.prod_slid').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
        centerPadding: 0,
        prevArrow: '<div class="slider__control" data-slide="prev"></div>',
        nextArrow: '<div class="slider__control" data-slide="next"></div>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });
        if (document.documentElement.clientWidth > 767) {
            $('.market__slider').slick({
                dots: false,
                infinite: true,
                speed: 1000,
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true,
                centerMode: true,
                centerPadding: 0,
                prevArrow: "<div class='prev market__btn'><img src='../img/svg/prev.svg' class='img-svg' alt='left'></div>",
                nextArrow: "<div class='next market__btn'><img src='../img/svg/next.svg' class='img-svg' alt='right'></div>",
            });
            $('.questions_slider').slick({
                dots: false,
                infinite: true,
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                centerMode: true,
                centerPadding: 0,
                prevArrow: '<div class="slider__control" data-slide="prev"></div>',
                nextArrow: '<div class="slider__control" data-slide="next"></div>',
            });
        } else {

        };

    function menu(menuBtn, block, close) {
        if (document.querySelector(menuBtn)) {
            document.querySelector(menuBtn).addEventListener('click', () => {
                document.querySelector(block).style.cssText = 'left: 0';
                document.body.style.overflow = "hidden"
            })
            document.querySelector(close).addEventListener('click', () => {
                document.body.style.overflow = "auto"
                document.querySelector(block).style.cssText = 'left: -100%';
            })
            $("#headerMenu").on("click", "a", function(event) {
                event.preventDefault(); //опустошим стандартную обработку
                var id = $(this).attr('href'), //заберем айдишник блока с параметром URL
                    top = $(id).offset().top - 40; //определим высоту от начала страницы до якоря
                $('body,html').animate({ scrollTop: top }, 1000); //сделаем прокрутку за 1 с
                document.body.style.overflow = "auto"
                document.querySelector(block).style.cssText = 'left: -100%';
            });

        }
    }
    menu('.header__menu', '.header__nav', '.header__close');

    $(document).ready(function() {
        document.querySelectorAll('.accordeon__heading').forEach(function(item) {
            item.addEventListener('click', function() {
                if (!item.classList.contains('ins')) {
                    document.querySelectorAll('.accordeon__heading').forEach(function(newItem) {
                        if (newItem.classList.contains('ins')) {
                            $(newItem).toggleClass('ins').next().slideToggle();
                        }
                    })
                    $(item).toggleClass('ins').next().slideToggle();
                } else {
                    $(item).toggleClass('ins').next().slideToggle();
                }
            })
        })
    });

    $('img.img-svg').each(function() {
        var $img = $(this);
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        $.get(imgURL, function(data) {
            var $svg = $(data).find('svg');
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }
            $svg = $svg.removeAttr('xmlns:a');
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }
            $img.replaceWith($svg);
        }, 'xml');
    });
});