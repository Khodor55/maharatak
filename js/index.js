let header = document.querySelector('header');
window.onscroll = function(){
    header_scroll()
}
function header_scroll(){
    if(scrollY >= 1){
        header.classList.add('active')
    }else{
        header.classList.remove('active')
    }
}
// open & close the header menu
let header_nav = document.querySelector('header .container nav');
function openHeaderMenu(){
    header_nav.classList.add('active');
}
function closeHeaderMenu(){
    header_nav.classList.remove('active');
}
