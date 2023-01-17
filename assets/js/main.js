/**
 * change navbar color
 */
// let navbar = document.getElementById('navbar');

// window.addEventListener('scroll', function(){
//     if(window.scrollY > 50){
//         navbar.classList.add('new-bg-color');
//         navbar.style.transition =`1s`;
//     }else{
//         navbar.style.transition =`1s`;
//         navbar.classList.remove('new-bg-color');
//     }
// });

/**
 * change navbar color using Jquery
 */
$(window).scroll(function(){
    if($(window).scrollTop() > 50) {
       $('#navbar').addClass('new-bg-color');
       $('#navbar').css("transition","1s")
    }
    else{
        $('#navbar').removeClass('new-bg-color');
        $('#navbar').css("transition","1s");
    }
    
})

/**
 * smooth scroll for nav links
 */
// let links = document.querySelectorAll('nav a');
// links.forEach((link =>{
//     link.addEventListener('click', function(e){
//         e.preventDefault();
//         let currentLinkID = e.target.attributes.href.value;
//         let sectionPosition = document.querySelector(currentLinkID).offsetTop
//         window.scroll({
//             top: sectionPosition,
//             behavior: 'smooth'
//         })
//     })
// }))

/**
 * smooth scroll for nav links by Jquery
 */
$('nav a').click(function(){
    let currentLinkId = $(this).attr('href');
    let sectionOffset = $(currentLinkId).offset().top;
    $('html, body').animate({scrollTop: sectionOffset}, 2000)
})

/**
 * scroll to top
 */

// let scrollTopArrow = document.querySelector('.top');
// scrollTopArrow.style.opacity = '0';

// window.addEventListener('scroll', function(){
//     let aboutSectionPosition = this.document.getElementById('about').offsetTop;

//     if(this.window.scrollY > aboutSectionPosition){
//         scrollTopArrow.style.transition = `.7s`;
//         scrollTopArrow.style.opacity = '1';
//     }
//     else{
//         scrollTopArrow.style.opacity = '0';
//         scrollTopArrow.style.transition = `.7s`;
//     }
// })

// let topBtn = document.querySelector('.top button');
// topBtn.addEventListener('click', function(){
//     window.scroll({
//         top: 0,
//         behavior: 'smooth'
//     })
// })

/**
 * scroll to top using Jquery
 */

$('.top').fadeOut();
$(window).scroll(function(){
    if ($(window).scrollTop() > $('#about').offset().top){
        $('.top').fadeIn(1000);
    }
    else{
        $('.top').fadeOut(1000);
    } 
})

$('.top button').click(function(){
    $('html, body').animate({scrollTop: 0}, 2000)
})


/**
 * loading screen
 */
//remove scroll at loading screen
// let body= document.body.style.overflow='hidden';
// document.querySelector('.loading').style.opacity='1';
// document.querySelector('.loading').style.visibility='visible';
// document.querySelector('.loading').style.transition=`1s`;

// window.addEventListener('load', function(){
//     setTimeout(function(){
//         document.querySelector('.loading').style.opacity='0';
//         document.querySelector('.loading').style.visibility='hidden';
//         document.querySelector('.loading').style.transition=`1s`;
//         document.body.style.overflow='auto';
//     }, 2000)
// })

/**
 * loading screen in Jquery
*/
$('body').css("overflow", "hidden");
$(document).ready(function(){
    $('.loading').fadeOut(4000, function(){
        $('body').css("overflow", "auto");
    });
})

/**
 * change theme
 */

$('.theme i').click(function(){
    let width = $('.options').outerWidth();
    let left = $('.theme').offset().left;
    if (left == 0){
        $('.theme').animate({left: -width}, 2000); 
    }
    else{
        $('.theme').animate({left: 0}, 2000); 
    }
           
})

let themeColors = ['#5BC0F8', '#C85C8E', '#DAE2B6', '#439A97', '#ff724c'];
for(var i =0; i<themeColors.length; i++) {
    $('.options li').eq(i).css('backgroundColor', themeColors[i]);
}

$('.options li').click(function(){
    let bg = $(this).css('backgroundColor');
    $('html').attr('style', `--main-color: ${bg}`);
})
