document.addEventListener("DOMContentLoaded", function(event) {

    $('.first__slider').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: "<div class='prev'></div>",
        nextArrow: "<div class='next'><img src='img/svg/next-arrow.svg' alt='' class='next__arrow img-svg'><div class='next__block'><div class='next__text'>ДАЛЕЕ</div></div></div>",
    });



    $(document).ready(function() {
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
        } else {

        }
    });

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