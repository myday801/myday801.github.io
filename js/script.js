$(document).ready(function () {
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
            photo.animate(1.0); // Number from 0.0 to 1.0
            illust.animate(1.0); // Number from 0.0 to 1.0
            html.animate(1.0); // Number from 0.0 to 1.0
            css.animate(1.0); // Number from 0.0 to 1.0
            jquery.animate(1.0); // Number from 0.0 to 1.0 
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
});