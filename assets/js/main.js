/**
 * change navbar color
 */
let navbar = document.getElementById('navbar');

window.addEventListener('scroll', function(){
    if(window.scrollY > 50){
        navbar.classList.add('new-bg-color');
        navbar.style.transition =`1s`;
    }else{
        navbar.style.transition =`1s`;
        navbar.classList.remove('new-bg-color');
    }
});

/**
 * smooth scroll for nav links
 */
let links = document.querySelectorAll('nav a');
links.forEach((link =>{
    link.addEventListener('click', function(e){
        e.preventDefault();
        let currentLinkID = e.target.attributes.href.value;
        let sectionPosition = document.querySelector(currentLinkID).offsetTop
        window.scroll({
            top: sectionPosition,
            behavior: 'smooth'
        })
    })
}))

/**
 * scroll to top
 */
let scrollTopArrow = document.querySelector('.top');
scrollTopArrow.style.opacity = '0';

window.addEventListener('scroll', function(){
    let aboutSectionPosition = this.document.getElementById('about').offsetTop;

    if(this.window.scrollY > aboutSectionPosition){
        scrollTopArrow.style.transition = `.7s`;
        scrollTopArrow.style.opacity = '1';
    }
    else{
        scrollTopArrow.style.opacity = '0';
        scrollTopArrow.style.transition = `.7s`;
    }
})

let topBtn = document.querySelector('.top button');
topBtn.addEventListener('click', function(){
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
})

/**
 * loading screen
 */
//remove scroll at loading screen
let body= document.body.style.overflow='hidden';
document.querySelector('.loading').style.opacity='1';
document.querySelector('.loading').style.visibility='visible';
document.querySelector('.loading').style.transition=`1s`;

window.addEventListener('load', function(){
    setTimeout(function(){
        document.querySelector('.loading').style.opacity='0';
        document.querySelector('.loading').style.visibility='hidden';
        document.querySelector('.loading').style.transition=`1s`;
        document.body.style.overflow='auto';
    }, 2000)
})