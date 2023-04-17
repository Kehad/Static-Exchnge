
const questionParagragh = document.querySelector('.aa');
const parashowAll = document.querySelectorAll('.parashow');
const arrow = document.querySelector('.arrow');
// FOR NAVIGATION
const navEl = document.querySelector('.headerlogo2');
const navList = document.querySelector('.nav-link');
const body = document.querySelector('.body');
const header = document.querySelector('.header');
const subhead = document.querySelector('.subhead');
const information = document.querySelector('.information');
const usage = document.querySelector('.usage');
const question = document.querySelector('.question');
const partners = document.querySelector('.partners');
const footer = document.querySelector('.footer');
parashowAll.forEach(function (parashow) {
    parashow.addEventListener('click', function(e) {
        e.preventDefault();
        const answere = parashow.parentElement;
        const aaa = answere.children[1];
        aaa.classList.toggle('aa');
        aaa.style.animationName = 'moveintop3';
        aaa.style.animationDuration = '1s';
        const answer2 = answere.closest('question-paragraph');
      
       if (aaa.classList.contains('aa')) {
        const arrows = parashow.parentElement;
        arrows.children[0].children[0].classList.replace('up', 'down');
       } else {
        const arrows = parashow.parentElement;
        arrows.children[0].children[0].classList.replace('down', 'up');
       }    
    })
    
})

const popupOpen = document.querySelectorAll('.popupOpen');
const popupEl = document.querySelector('.popup');
popupOpen.forEach(function (popup) {
    popup.addEventListener('click', function (e) {
        e.preventDefault();
        console.log(popupContent);
        popupEl.style.opacity = 1;
        popupEl.style.visibility = 'visible';
        popupContent.style.opacity = 1;
        popupContent.style.visibility = 'visible';
        // popupContent.classList.add('popup__animation');
        // popupEl.classList.add('popup__animation');
        popupEl.style.animationName = 'moveintop2';
        popupEl.style.animationDuration = '1s';
        popupContent.style.animationName = 'moveintop2';
        popupContent.style.animationDuration = '1s';
        console.log(popupContent);
        console.log(popupEl);
    });
});

const popupClose = document.querySelector('.popup__close');
const popupContent = document.querySelector('.popup__content');

popupClose.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('Close popup');
    popupEl.style.animationName = 'moveawaytop';
    popupEl.style.animationDuration = '1s';
    popupContent.style.animationName = 'moveawaytop';
    popupContent.style.animationDuration = '1s';
    console.log(popupContent);
        console.log(popupEl)
    popupEl.style.opacity = 0;
    popupEl.style.visibility = 'hidden';
    popupContent.style.opacity = 0;
    popupContent.style.visibility = 'hidden';
    console.log(popupContent);
        console.log(popupEl)

});

navEl.addEventListener('click', function (e) {
    e.preventDefault();
    navList.classList.add('nav--active');
    console.log('show nav')
    if (navList.classList.contains('nav--active')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = 'visible';
    }
});

const navClose = document.querySelector('.nav-close');
const navItem = document.querySelectorAll('.item')
navClose.addEventListener('click', function (e) {
    // navList.classList.add('nav--showslide');
    e.preventDefault();
    navList.style.transformX = 'translateX(100%)';
    navList.style.transition = 'all 0.5s';
    navList.classList.remove('nav--active');
    body.style.overflow = 'visible';
});
navItem.forEach((item) => {
    // console.log(item)
    item.addEventListener('click', function (e) {
        e.preventDefault();
        // item.classList.remove('nav--active');
        console.log('aa')
        navList.style.transformX = 'translateX(100%)';
        navList.style.transition = 'all 0.5s';
        navList.classList.remove('nav--active');
        body.style.overflow = 'visible';
    })
})

// FOR SCROLLING POSITION

// FOR INFORMATION ANIMATION
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('info-animate')
        } else {
            entry.target.classList.remove('info-animate');
        }
    })
})
const Imginfo2 = document.querySelectorAll('.info1');
window.addEventListener('scroll', function() {
    Imginfo2.forEach((img) => img.classList.add('info-animate'));
})
// infotext.forEach((text) => observer.observe(text));

const backToTop = document.querySelector('.btn-text2');
const infoText2 = document.querySelector('.infotext2');
const circle = document.querySelector('.circle-2');
const changePosition = function () {
    if (screen.width < 579) {
        console.log('Changing position')
        infoText2.insertAdjacentElement('beforebegin', circle);
    } else {
        console.log('Done');
        infoText2.insertAdjacentElement('afterend', circle); 
    }
}
const observers = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            changePosition();
        } else {
        }
    })
  
});
window.addEventListener('scroll', function(e) {
    changePosition();
});
window.addEventListener('resize', function (event) {
    let widthh = screen.width;
    let width = window.outerWidth;
    // console.log(width, widthh);
    if (width < 700) {
        backToTop.innerHTML = '&uarr;';
    } else {
        backToTop.innerHTML = 'Back to Top &uarr;';
    }
})
window.addEventListener('scroll', function (event) {
    let widthh = screen.width;
    let width = window.outerWidth;
    // console.log(width, widthh);
    if (width < 700) {
        backToTop.innerHTML = '&uarr;';
    } else {
        backToTop.innerHTML = 'Back to Top &uarr;';
    }
})
