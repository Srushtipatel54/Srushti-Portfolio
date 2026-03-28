// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active'); 
}

// Audio play/pause
var audio = document.getElementById("audioPlayer");
function playpause() {
    if (document.getElementById("checkboxInput").checked == false) {
        audio.play();
    } else {
        audio.pause();
    }
}

// Preloader
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
    setTimeout(function () {
        loader.style.display = "none";
    }, 1000);
});

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start' // top of section
            });
        }

        // close navbar on click
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

// scroll sections & sticky header
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // active navbar links
            navlinks.forEach(links => {
                links.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            // active sections for animation on scroll
            sec.classList.add('show-animate');
        } else {
            // remove animation class if want repeat on scroll
            sec.classList.remove('show-animate');
        }
    });

    // sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // footer animation
    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

// Footer pupils animation
let Pupils = document.getElementsByClassName('footer-pupil');
let pupilsArr = Array.from(Pupils);

let pupilStartPoint = -10;
let pupilRangeX = 20;
let pupilRangeY = 15;

// mouse positions
let mouseXStartPoint = 0;
let mouseXEndPoint = window.innerWidth;
let currentXPosition = 0;
let fracXValue = 0;

let mouseYEndPoint = window.innerHeight;
let currentYPosition = 0;
let fracYValue = 0;

let mouseXRange = mouseXEndPoint - mouseXStartPoint;

const mouseMove = (event) => {
    currentXPosition = event.clientX - mouseXStartPoint;
    fracXValue = currentXPosition / mouseXRange;

    currentYPosition = event.clientY;
    fracYValue = currentYPosition / mouseYEndPoint;

    let pupilXCurrentPosition = pupilStartPoint + (fracXValue * pupilRangeX);
    let pupilYCurrentPosition = pupilStartPoint + (fracYValue * pupilRangeY);

    pupilsArr.forEach((curPupil) => {
        curPupil.style.transform = `translate(${pupilXCurrentPosition}px, ${pupilYCurrentPosition}px)`;
    });
}

const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent default submit

    const data = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: data
    })
    .then(response => {
        alert('Message sent successfully!');
        form.reset();
    })
    .catch(error => {
        alert('Failed to send message.');
        console.error(error);
    });
});


const windowResize = (event) => {
    mouseXEndPoint = window.innerWidth;
    mouseYEndPoint = window.innerHeight;
    mouseXRange = mouseXEndPoint - mouseXStartPoint;
}

window.addEventListener('mousemove', mouseMove);
window.addEventListener('resize', windowResize);




// // toggle icon navbar
// let menuIcon=document.querySelector('#menu-icon');
// let navbar=document.querySelector('.navbar');

// menuIcon.onclick=()=>{
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active'); 

// }
// var audio = document.getElementById("audioPlayer");
// function playpause() {
//     if (document.getElementById("checkboxInput").checked == false) {
//       audio.play();
//      }
  
//    else{
//        audio.pause();
//    }
//     }


// // var audio = document.getElementById("audioPlayer");
// var loader = document.getElementById("preloader");
// window.addEventListener("load", function () {
//   setTimeout(function () {
//     loader.style.display = "none";
//   }, 1000);
// });
// // const { animate } = require("framer-motion");

// // scroll sections
// let sections =document.querySelectorAll('section');
// let navlinks=document.querySelectorAll('header nav a');

// window.onscroll=()=>{
//     sections.forEach(sec=>{
//         let top=window.scrollY;
//         let offset=sec.offsetTop-100;
//         let height=sec.offsetHeight;
//         let id =sec.getAttribute('id');

//         if(top>=offset && top < offset + height ){
//             //active navbar links
//             navlinks.forEach(links=>{
//                 links.classList.remove('active');
//             document.querySelector('header nav a[href*='+id+']').classList.add('active');
//     });
//     // active sections for animation on scroll
//     sec.classList.add('show-animate');
// }
// //if want to use animation that repeats on scroll use this
// else{
//     sec.classList.remove('show-animate');
// }
//     });


//     // sticky header
//     let header =document.querySelector('header');
//     header.classList.toggle('sticky',window.scrollY > 100);

//     // remove toggle icon and navbar when click navbar links(scroll)
//     menuIcon.classList.remove('bx-x');
//     navbar.classList.remove('active');

// //animation footer on scroll
// let footer = document.querySelector('footer');

// footer.classList.toggle('show-animate', this.innerHeight +this.scrollY >= document.scrollingElement.scrollHeight);
// }

// let Pupils = document.getElementsByClassName('footer-pupil');
// let pupilsArr = Array.from(Pupils);

// let pupilStartPoint = -10;
// let pupilRangeX = 20;
// let pupilRangeY = 15;

// // mouse X 
// let mouseXStartPoint = 0;
// let mouseXEndPoint = window.innerWidth;
// let currentXPosition = 0;
// let fracXValue = 0;


// // mouse Y position 
// let mouseYEndPoint = window.innerHeight;
// let currentYPosition = 0;
// let fracYValue = 0;

// let mouseXRange = mouseXEndPoint - mouseXStartPoint;

// const mouseMove = (event) => {
//     currentXPosition = event.clientX - mouseXStartPoint;
//     fracXValue = currentXPosition / mouseXRange;

//     currentYPosition = event.clientY;
//     fracYValue = currentYPosition / mouseYEndPoint;
 
//     // footer
//     let pupilXCurrrentPosition = pupilStartPoint + (fracXValue * pupilRangeX);
//     let pupilYCurrrentPosition = pupilStartPoint + (fracYValue * pupilRangeY);

//     // footer
//     pupilsArr.forEach((curPupil) => {
//       curPupil.style.transform= `translate(${pupilXCurrrentPosition}px, ${pupilYCurrrentPosition}px)`;
//   })

// }


// const windowResize = (event) => {
//     mouseXEndPoint = window.innerWidth;
//     mouseYEndPoint = window.innerHeight;
//     mouseXRange = mouseXEndPoint - mouseXStartPoint;
// }

// window.addEventListener('mousemove', mouseMove);
// window.addEventListener('resize', windowResize);
