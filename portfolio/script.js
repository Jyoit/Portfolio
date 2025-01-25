// Get DOM elements
const navMenu = document.getElementById('nav_menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav__link');

// Show menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Hide menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// Close menu on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
});






// /*=============== SHOW MENU ===============*/
// const navMenu= document.getElementById('nav-menu'),
//     navToggle=document.getElementById('nav-toggle'),
//     navClose= document.getElementById('nav-close')

// /*===========MENU SHOW============*/
// // Validate if constant exists

// if (navToggle){
//     navToggle.addEventListener('click', ()=>{
//         navMenu.classList.add('show-menu')
//     })
// }

// //Menu hidden
// if (navClose){
//     navClose.addEventListener('click',()=>{
//         navMenu.classList.remove('show-menu')
//     })
// }

/*=============== REMOVE MENU MOBILE ===============*/

const navLink=document.querySelectorAll('.nav__link')

const linkAction = ()=>{
    const navMenu=document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')

}
navLink.forEach(n=>n.addEventListener('click',linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader=()=>{
    const header=document.getElementById('header')
    //when the scroll is greater than 50 viewport height, add the blur-header class to the header tag
    this.scrollY >= 50? header.classList.add('blur-header')
                      : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== EMAIL JS ===============*/
const contactForm= document.getElementById('contact-form'),
contactMessage= document.getElementById("contact-message")

const sendEmail= (e) =>{
    e.preventDefault()
    //serviceID - templateID- #form - publicKey
    emailjs.sendForm('service_a09vjtd',"template_m4rd9da","#contact-form","8nNraHWwk7klTFhiu")
    .then(()=>{
        //show sent message
        contactMessage,textContent = "Message sent successfully "
//remove messageafter 5 minutes
setTimeout(()=>{
    contactMessage.textContent=""
},5000)

//clear input field

contactForm.request()
    },()=>{
        //show error messages
        contactMessage.textContent="Message not sent (service error)"
    })
}

contactForm.addEventListener('submit',sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp= document.getElementById('scroll-up')
    //when the scroll is higher than 350 viewport height, add the show-scroll class to 
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
    :scrollUp.classList.remove('show-scroll') 
}
window.addEventListener('scroll',scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const section= document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset 

    section.forEach(current =>{
        const sectionHeight=current.offsetHeight,
        sectionTop= current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionClass = document.querySelector('.nav__menu a[href*='+sectionId +']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }
        else{
            sectionClass.classList.remove('active-link')
        }

    })
}
window.addEventListener('scroll',scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr=ScrollReveal({
    origin:"top",
    distance:"60px",
    duration:2500,
    delay:400, 
    //reset:true // Animations repeat
})

sr. reveal(`.home__data, .home__social,.contact__container,.footer__container`)
sr. reveal(`.home__image`, {origin:"bottom"})
sr. reveal(`.about__data, .skills__data`, {origin:"left"})
sr. reveal(`.about__image, .skills__content`, {origin:"right"})
sr. reveal(`.services__card, .projects__Card`, {interval:100})