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

    // progressbar

    // photoshop 성취율
    var photo = new ProgressBar.Line(skill_photo, {
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        duration: 1400,
        easing: 'bounce',
        strokeWidth: 6,
        from: {
            color: '#e5e000',
            a: 0
        },
        to: {
            color: '#684595',
            a: 1
        },
        step: function (state, bar) {
            bar.path.setAttribute('stroke', state.color);
        }
    });

    // illustrator 성취율
    var illust = new ProgressBar.Line(skill_illust, {
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        duration: 1400,
        easing: 'bounce',
        strokeWidth: 6,
        from: {
            color: '#e5e000',
            a: 0
        },
        to: {
            color: '#684595',
            a: 1
        },
        step: function (state, bar) {
            bar.path.setAttribute('stroke', state.color);
        }
    });

    // html 성취율
    var html = new ProgressBar.Line(skill_html, {
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        duration: 1400,
        easing: 'bounce',
        strokeWidth: 6,
        from: {
            color: '#e5e000',
            a: 0
        },
        to: {
            color: '#684595',
            a: 1
        },
        step: function (state, bar) {
            bar.path.setAttribute('stroke', state.color);
        }
    });

    // css 성취율
    var css = new ProgressBar.Line(skill_css, {
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        duration: 1400,
        easing: 'bounce',
        strokeWidth: 6,
        from: {
            color: '#e5e000',
            a: 0
        },
        to: {
            color: '#684595',
            a: 1
        },
        step: function (state, bar) {
            bar.path.setAttribute('stroke', state.color);
        }
    });

    // jquery 성취율
    var jquery = new ProgressBar.Line(skill_jquery, {
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        duration: 1400,
        easing: 'bounce',
        strokeWidth: 6,
        from: {
            color: '#e5e000',
            a: 0
        },
        to: {
            color: '#684595',
            a: 1
        },
        step: function (state, bar) {
            bar.path.setAttribute('stroke', state.color);
        }
    });

    photo.animate(1.0); // Number from 0.0 to 1.0
    illust.animate(1.0); // Number from 0.0 to 1.0
    html.animate(1.0); // Number from 0.0 to 1.0
    css.animate(1.0); // Number from 0.0 to 1.0
    jquery.animate(1.0); // Number from 0.0 to 1.0


    // redesign 슬라이드
    new Swiper(".sw-rede", {
        slidesPerView: 3,
        loop: true,
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});