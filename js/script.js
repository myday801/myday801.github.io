$(document).ready(function () {

    // 위로가기 기능
    $('.gotop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        });
    });

    // 부드럽게 위치 이동하는 코드
    var moveEl = $('.move');
    // 클릭시 해당위치로 부드럽게 이동한다.
    $.each(moveEl, function () {

        $(this).click(function (e) {
            // href 를 일단 막아서 위치이동 못하게함.
            e.preventDefault();
            // 가야하는 곳의 위치를 파악한다.
            var tg = $(this).attr('href');
            var num;
            // 혹시 #아이디 가 없다면
            if (tg == '#') {
                num = 0;
            } else {
                // 어느 만큼 이동해야 하는 지를 숫자로 파악한다.
                num = $(tg).offset().top;
            }

            // 움직이자
            $('html, body').stop().animate({
                scrollTop: num
            }, 1000);
        });
    });


    // skill_progressbar 영역
    // photoshop 성취율
    var photo = new ProgressBar.Line(skill_photo, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#684595',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        from: {
            color: '#e5e000'
        },
        to: {
            color: '#684595'
        },
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
        }
    });

    // illustrator 성취율
    var illust = new ProgressBar.Line(skill_illust, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#684595',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        from: {
            color: '#e5e000'
        },
        to: {
            color: '#684595'
        },
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
        }
    });

    // html 성취율
    var html = new ProgressBar.Line(skill_html, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#684595',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        from: {
            color: '#e5e000'
        },
        to: {
            color: '#684595'
        },
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
        }
    });

    // css 성취율
    var css = new ProgressBar.Line(skill_css, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#684595',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        from: {
            color: '#e5e000'
        },
        to: {
            color: '#684595'
        },
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
        }
    });

    // jquery 성취율
    var jquery = new ProgressBar.Line(skill_jquery, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#684595',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        from: {
            color: '#e5e000'
        },
        to: {
            color: '#684595'
        },
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
        }
    });

    // 스크롤을 했을 때 모션 시작
    var sc_y = $(window).scrollTop();
    $(window).scroll(function () {

        sc_y = $(window).scrollTop();

        if (sc_y >= 1100) {
            photo.animate(0.8); // Number from 0.0 to 1.0
            illust.animate(0.8); // Number from 0.0 to 1.0
            html.animate(0.9); // Number from 0.0 to 1.0
            css.animate(0.8); // Number from 0.0 to 1.0
            jquery.animate(0.6); // Number from 0.0 to 1.0 
        }
    });

    // publishing 영역
    // publishing 슬라이드

    var swiper = new Swiper(".sw-publ", {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        pagination: {
            el: ".publ-pagination",
            type: "fraction",
            clickable: true,
        },
        navigation: {
            nextEl: ".publ-button-next",
            prevEl: ".publ-button-prev"
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });

    // aos 관련
    // life aos 
    AOS.init();
});