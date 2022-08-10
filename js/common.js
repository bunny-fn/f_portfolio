
/*
 *  intro text
 */ 
// let introTxt1 = document.getElementById('intro-txt1');
// let introTxt2 = document.getElementById('intro-txt2');

// introTxt1.addEventListener('input', function() {
//   this.setAttribute('data-heading', this.innerText);
// });

// introTxt2.addEventListener('input', function() {
//     this.setAttribute('data-heading', this.innerText);
// });


/**
 * responsive navbar
 */
const navToggler = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.navbar ul');
const navLinks = document.querySelectorAll('.navbar a');


allEventListners();


function allEventListners() {
  navToggler.addEventListener('click', togglerClick);
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}


function togglerClick() {
  navToggler.classList.toggle('toggle-open');
  navMenu.classList.toggle('open');
}


function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}


/*
 *  aside
 */ 
const topMove = document.getElementById('top-move');
const intro = document.getElementById('intro');
const about = document.getElementById('about');
const header = document.getElementById('header');
const headerContainer = document.getElementById('header-container');


const checkScroll = () => {

    // 페이지가 수직으로 얼마나 스크롤되었는지를 확인하는 값(픽셀) pageOffset
    let pageOffset = window.pageYOffset;

    // 0이 아니면 show class add, 그렇지 않으면 show class remove // default css => hidden
    // 0이면 스크롤이 안 된상태 이고, 0이 아니면 스크롤이 일어난 상태 
    if ( pageYOffset !== 0 ) {
        topMove.classList.add('show');  
    } else {
        topMove.classList.remove('show'); 
    }


    
    
    //if ( pageOffset >= intro.scrollHeight ) {
    // if ( pageOffset >= about.offsetTop ) {
    //     // about 섹션 부터 menu all white
    //     headerContainer.classList.remove('header-container');
    //     headerContainer.classList.remove('header-scroll-up');
    //     headerContainer.classList.add('header-scroll-down');

    // } 
    
    // if ( pageOffset == intro.scrollHeight ) {
        
    //     headerContainer.classList.remove('header-scroll-down');
    //     headerContainer.classList.add('header-scroll-up');
    //     headerContainer.classList.add('header-container');

    // }


    /*
    *  header menu class
    */ 
    if ( pageOffset >= 350 ) {
        // menu 지나면 menu all white
        headerContainer.classList.remove('header-container');
        headerContainer.classList.remove('header-scroll-up');
        headerContainer.classList.add('header-scroll-down');
    
    } else if( pageOffset <= 250 ) {
        headerContainer.classList.remove('header-scroll-down');
        headerContainer.classList.add('header-scroll-up');
        //headerContainer.classList.add('header-container');

    } else {

    }
 
}

const topMoveScroll = () => {
    if ( window.pageYOffset > 0 ) {
        window.scrollTo({top:0, behavior: 'smooth'});
    }
    
}


// 스크롤 시 checkScroll 호출
window.addEventListener('scroll', checkScroll);
// top move 버튼 클릭 시 oveBackToTop 호출
topMove.addEventListener('click', topMoveScroll);




/*
*  project modal
*/ 
const openButton = document.getElementById('open');
const modal = document.querySelector('.modal');
const modal_overlay = document.querySelectorAll("modal_overlay");

const openModal = (param) => {
    document.getElementById('modal-' + param).classList.remove('modal-hidden');
}

const closeModal = (param) => {
    document.getElementById('modal-' + param).classList.add('modal-hidden');
}




/**
 * project img slide
 */
 lightbox.option ({
  'resizeDuration': 0,
  'fadeDuration':100,
  'wrapAround': true,
  'disableScrolling': false,
  'fitImagesInViewport':true,
  'albumLabel':false,
  'showImageNumberLabel':false,
  'alwaysShowNavOnTouchDevices':true,
//   'maxWidth':1600,
//   'maxHeight':1000,
  'positionFromTop':200
})



/**
 * mobile check
 */
let filter = "win16|win32|win64|mac";
if ( navigator.platform ) {
  if ( 0 > filter.indexOf(navigator.platform.toLowerCase()) ){

  } else {

  }
}