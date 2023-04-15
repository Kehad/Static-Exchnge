
const questionParagragh = document.querySelector('.aa');
const parashowAll = document.querySelectorAll('.parashow');
// console.log(parashowAll);
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
   // console.log(parashow)
    parashow.addEventListener('click', function(e) {
        e.preventDefault();
        // console.log(parashow);
        // console.log(parashow.nextElementSibling);
       // const answer = parashow.nextElementSibling;
        const answere = parashow.parentElement;
        // console.log(answere.children[1]);
        const aaa = answere.children[1];
        aaa.classList.toggle('aa');
        aaa.style.animationName = 'moveintop3';
        aaa.style.animationDuration = '1s';
        const answer2 = answere.closest('question-paragraph');
        // console.log(answer2);
    
    
       if (aaa.classList.contains('aa')) {
        // console.log('it contains');
        const arrows = parashow.parentElement;
        arrows.children[0].children[0].classList.replace('up', 'down');
       } else {
        // console.log('it does not contain');
        const arrows = parashow.parentElement;
        arrows.children[0].children[0].classList.replace('down', 'up');
       }    
    })
    
})

const popupOpen = document.querySelectorAll('.popupOpen');
const popupEl = document.querySelector('.popup');
popupOpen.forEach(function (popup) {
    // console.log(popup);
    popup.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('Open popup');
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
        // subhead.style.display = 'none';
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
    // console.log(navEl);
    // console.log(navList);
    // console.log(body)
    // body.style.overflow = 'hidden';
    // *141*11*0#  *123*10# *140*712*0# *140#
    if (navList.classList.contains('nav--active')) {
        // console.log('nav-active');
        body.style.overflow = 'hidden';
        // subhead.style.display = 'none';
        // information.style.display = 'none';
        // usage.style.display = 'none';
        // question.style.display = 'none';
        // partners.style.display = 'none';
        // footer.style.display = 'none';
        // body.style.filter ='blur(1px)';
        // body.style.filter ='blur(20px)';
        // body.style.webkitBackdropFilter='blur(20px)';
        // body.style.backdropFilter='blur(20px)';
        // body.style.webkitBackdropFilter='blur(20px)';
        // body.setAttribute("-webkit-backdrop-filter", "blur(20px)");
        // body.setAttribute("backdrop-filter", "blur(20px)");
        // console.log(body)
    } else {
        // console.log('remove nav-active');
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
    // console.log('Remove');
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
// const Imginfo = document.querySelector('.circle-2');

// window.addEventListener('scroll', () => {
//     // const Imginfo = document.querySelector('.circle-2');
//     // const ImgInfoPosition = eachImg.getBoundingClientRect().top;
//     // let screenheight = window.innerHeight;

//     // if (ImgInfoPosition < screenheight) {
//     //     console.log('add animation');
//     //     Imginfo.style.animationName = 'moveinright';
//     //     Imginfo.style.animationDuration = '5s';
//     // }
//     const Imginfo2 = document.querySelectorAll('.info1');
//     Imginfo2.forEach( function (imginfo) {
//         const eachImg = imginfo.getBoundingClientRect().top;
//         let screenheight = window.innerHeight;

//         if (eachImg < screenheight) {
//             console.log('add animation');
//             console.log(imginfo)
//             imginfo.style.animationName = 'moveinright';
//             imginfo.style.animationDuration = '5s';
//         }
//     })
// });

// FOR INFORMATION ANIMATION
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry);
        if (entry.isIntersecting) {
            // entry.style.animationName = 'moveinright';
            // entry.style.animationDuration = '5s';
            entry.target.classList.add('info-animate')
            // console.log(entry)
        } else {
            // entry.style.animationName = '';
            // entry.style.animationDuration = '';
            entry.target.classList.remove('info-animate');
        }
    })
})
const Imginfo2 = document.querySelectorAll('.info1');
// const infotext = document.querySelectorALl('.infotext')
// Imginfo2.forEach((img) => observer.observe(img));
window.addEventListener('scroll', function() {
    // Imginfo2.forEach.classList.add('info-animate');
    Imginfo2.forEach((img) => img.classList.add('info-animate'));
})
// infotext.forEach((text) => observer.observe(text));

// FOR INFORMATION WIDTH
// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry);
//         if (entry.isIntersecting) {
//         } else {
//         }
//     })
// });

const backToTop = document.querySelector('.btn-text2');
const infoText2 = document.querySelector('.infotext2');
const circle = document.querySelector('.circle-2');
const changePosition = function () {
    if (screen.width < 500) {
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
            // console.log('Intersecting');
            // console.log(entries)
            changePosition();
        } else {
            // console.log('Not intersecting');
            // console.log(entries)
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
