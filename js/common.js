// intro
let introTxt1 = document.getElementById('intro-txt1');
let introTxt2 = document.getElementById('intro-txt2');

introTxt1.addEventListener('input', function() {
  this.setAttribute('data-heading', this.innerText);
});

introTxt2.addEventListener('input', function() {
    this.setAttribute('data-heading', this.innerText);
});




// aside
const topMove = document.getElementById('top-move');
const intro = document.getElementById('intro');
const about = document.getElementById('about');
const header = document.getElementById('header');
const headerContainer = document.getElementById('header-container');


const checkScroll = () => {

    // 페이지가 수직으로 얼마나 스크롤되었는지를 확인하는 값(픽셀 단위로 변환) pageOffset
    let pageOffset = window.pageYOffset;

    // 이 값이 0이 아니면, 클래스를 show를 선언하고, 그렇지 않다면 show를 삭제한다. 디폴트 css는 hidden상태
    // 0이면 스크롤이 안된상태 이고, 0이 아니면 스크롤이 일어난상태 
    if ( pageYOffset !== 0 ) {
        // id= backtotop  class="show"를 추가한다.
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


    // header menu class
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
        //스무스하게 스크롤 하기 //어디까지 올라갈지 위치를 정한다. behavior 자연스럽게 이동.
        window.scrollTo({top:0, behavior: 'smooth'});
    }
    
}


// 스크롤할때마다, checkScroll을 호출해라.
window.addEventListener('scroll', checkScroll);
// 클릭하면 oveBackToTop를 호출해라
topMove.addEventListener('click', topMoveScroll);





//header
