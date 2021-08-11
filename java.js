//all
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
//my account
/*const open_account = $('.myaccount');
const form_account = $('.photo-account');
const account_bubbleSort = $('.photo-account');

open_account.addEventListener('click',() => {
    form_account.classList.add('photo-account2');
});


account_bubbleSort.addEventListener('click',() => {
    form_account.classList.remove('photo-account2');
})*/

// form-form_registration

const open_registration = $('.js-log-in');
const form_registration = $('.form_registration');
const close_registration = $('.form-close');
const registration_bubbleSort = $('.form');

open_registration.addEventListener('click',() => {
    form_registration.classList.add('form_registration2');
});

close_registration.addEventListener('click', () => {
    form_registration.classList.remove('form_registration2');
});

form_registration.addEventListener('click', () => {
    form_registration.classList.remove('form_registration2');
});
registration_bubbleSort.addEventListener('click', (event) => {
    event.stopPropagation();
})

// form-login

const open_login = $('.js-login');
const form_login = $('.login');
const close_login = $('.login-close');
const login_bubbleSort = $('.form2');   

open_login.addEventListener('click',() => {
    form_login.classList.add('login2');
});

close_login.addEventListener('click', () =>{
    form_login.classList.remove('login2');
});

form_login.addEventListener('click',() => {
    form_login.classList.remove('login2');
});
login_bubbleSort.addEventListener('click', (event) => {
    event.stopPropagation();
})

//time

function time() {
    let today = new Date();
    let weekday=new Array(7);
    weekday[0]='Sunday';
    weekday[1]='Monday';
    weekday[2]='Tuesday';
    weekday[3]='Wednesday';
    weekday[4]='Thursday';
    weekday[5]='Friday';
    weekday[6]='Saturday';
    let day = weekday[today.getDay()];
    let dd = today.getDate();
    let mm = today.getMonth()+1; 
    let yyyy = today.getFullYear();
    let h=today.getHours();
    let m=today.getMinutes();
    let s=today.getSeconds();
    m=checkTime(m);
    s=checkTime(s);
    nowTime = h+':'+m+':'+s;
    if(dd<10){dd='0'+dd}
    if(mm<10){mm='0'+mm}
    today = day+', '+ dd+'/'+mm+'/'+yyyy;

    tmp='<span class="date">'+today+' | '+nowTime+'</span>';

    $('.clock').innerHTML=tmp;

    clocktime=setTimeout('time()','1000','JavaScript');
    function checkTime(i)
    {
    if(i<10){
    i='0' + i;
    }
    return i;
    }
}

//slider-menu

const slider = $('.slider');
const next = $('.click-right');
const back = $('.click-left');
const slides = $$('.slide');
const slideIcons = $$('.slide-icon')
const numberOfSlides = slides.length;
var slideNumber = 0;

next.addEventListener('click', () =>  {

    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    slideIcons.forEach((slideIcons) => {
        slideIcons.classList.remove('active');
    });

    slideNumber++;

    if(slideNumber > (numberOfSlides - 1)){
        slideNumber = 0;
    }

    slides[slideNumber].classList.add('active');
    slideIcons[slideNumber].classList.add('active')
});

back.addEventListener('click', () =>  {

    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    slideIcons.forEach((slideIcons) => {
        slideIcons.classList.remove('active');
    });

    slideNumber--;

    if(slideNumber < 0){
        slideNumber = numberOfSlides - 1;
    }

    slides[slideNumber].classList.add('active');
    slideIcons[slideNumber].classList.add('active')
});

var autoSlider = () => {
    playSlider = setInterval (() => {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });
        slideIcons.forEach((slideIcons) => {
            slideIcons.classList.remove('active');
        });
    
        slideNumber++;
    
        if(slideNumber > (numberOfSlides - 1)){
            slideNumber = 0;
        }
    
        slides[slideNumber].classList.add('active');
        slideIcons[slideNumber].classList.add('active')
    }, 4000)
    
}
autoSlider();

slider.addEventListener('mouseover', () => {
    clearInterval(playSlider);
});

slider.addEventListener('mouseout', () => {
    autoSlider();
});

//menu_phone

const open_menu_phone = $('.header-menu-left');
const add_menu_phone = $('.main-menu-left');
const close_menu_phone = $('.stop_meu_phone')

open_menu_phone.addEventListener('click', () => {
    add_menu_phone.classList.add('open-menu-left')
});
close_menu_phone.addEventListener('click', () => {
    add_menu_phone.classList.remove('open-menu-left')
});

