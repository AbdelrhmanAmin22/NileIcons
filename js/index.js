// toogle menu and links 
let links = document.getElementById('links')
let mobileBar = document.getElementById('mobile-bar')
window.addEventListener('resize', ()=>{        
        if (window.innerWidth <= 1150) {
            links.style.display = 'none'
            mobileBar.style.display = 'block'
        } else {
            links.style.display = 'flex'
            mobileBar.style.display = 'none'
        }
    } 
)

// fixed nav scroll 
let nav = document.getElementById('nav')
let main = document.getElementById('main')
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('fixedNav')
        main.style.marginTop ="100px"
    } else {
        nav.classList.remove('fixedNav')
        main.style.marginTop ="0"
    }
})

// scroll to up 
let toUp = document.getElementById('toUp')
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        toUp.style.display = "flex"
    } else {
        toUp.style.display = "none"
    }
})
toUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});

// togle x with bar in mobile menu

let mobileMenu = document.getElementById('mobile-menu');
let menuOpen = false; 

mobileBar.innerHTML = `<i class="fa-solid fa-bars" id="open"></i>`;

mobileBar.addEventListener('click', () => {
    mobileMenu.classList.toggle('activeMenu');
    menuOpen = !menuOpen; 
    if (menuOpen) {
        mobileBar.innerHTML = `<i class="fa-solid fa-xmark" id="close"></i>`;
    } else {
        mobileBar.innerHTML = `<i class="fa-solid fa-bars" id="open"></i>`;
    }
});

// loader 
setTimeout(()=>{
    document.getElementById('loader').style.display = 'none';
    document.body.style.overflow = 'visible';
}, 1500);


// download Profile 

function downloadPDF() {
    var pdfPath = '../assets/Nile+Icons+portofolio_240313_182831.pdf';
    var link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'Nile_Icons.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
document.getElementById('downloadButton').addEventListener('click', downloadPDF);

// our values toogle 

    let values = {
        0 : {
            title : `partnership`,
            content :  `partnership is the best model of cooperation to reach a
            win-win situation to satisfy all parties`,
        },
        1 : {
            title : `Innovation`,
            content : `we continually search for and master new and better
            ways of doing things on an operational level to get the
            best utilization of all resources`,
        },
        2 : {
            title : `Quality`,
            content : `Focus on Details is the secret of qualitys`,
        },
        3 : {
            title : `Carful Selection`,
            content : `Careful Choosing of solution stakeholders from the
            Designer, the installer, and even the operator`,
        },
        4: {
            title : `Value Engineering`,
            content : `Doing Value Engineering finding the best way to do
            things`,
        },
        5 : {
            title : `Integration`,
            content : `Creating harmony between vendors’ products to
            produce an integrated customized solution that solves
            problems, facilitates operations, controls systems, and
            increases ROI`,
        }
    } 

const circles = document.querySelectorAll('.circle');
circles.forEach((circle, index) => {
    circle.addEventListener('click', () => {
        circles.forEach(circle => {
            circle.classList.remove('active');
        });
        circle.classList.add('active');
        document.getElementById('title').textContent = values[index].title;
        document.getElementById('content').querySelector('p').textContent = values[index].content;
    });
});

// swipper js partners 
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    },
    autoplay: {
        delay: 2000, 
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        },
});

// mobile links activated 

const menulinks = document.querySelectorAll('.mobile-menu  a');
for (let i = 0; i < menulinks.length; i++) {
    menulinks[i].addEventListener('click', () => {

        menulinks.forEach(link => {
            link.classList.remove('activeM');
        });
        menulinks[i].classList.add('activeM');
        mobileMenu.classList.remove('activeMenu');
        mobileBar.innerHTML = `<i class="fa-solid fa-bars" id="open"></i>`;
    });
}





// animated 

$(document).ready(function() {
    var controller = new ScrollMagic.Controller();
    $('.animated').each(function() {
        var scene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.8,
            reverse: false 
        })
        .setClassToggle(this, 'animate') 
        .addTo(controller);
    });
});

// main h3 
$(document).ready(function() {
    setTimeout(function() {
        animateText(".typewriter");
    }, 1500); 
    function animateText(element) {
        var text = $(element).text();
        var letters = text.split("");
        $(element).empty();
        $.each(letters, function(index, letter) {
            var span = $("<span style='opacity:0;'></span>").text(letter).appendTo(element);
            TweenMax.to(span, 0.5, { opacity: 1, delay: index * 0.1 });
        });
    }
    var controller = new ScrollMagic.Controller();
    var scene = new ScrollMagic.Scene({
        triggerElement: ".typewriter",
        triggerHook: 0.8,
        reverse: false
    })
    .on("enter", function() {
        animateText(".typewriter");
    })
    .addTo(controller);
});

// img in main 

document.addEventListener('DOMContentLoaded', function() {
    const mainImg = document.getElementById('mainImg');
    mainImg.style.transition = 'transform 0.5s ease-in-out ';
    setTimeout(function() {
        mainImg.style.transform = 'translate(0px, 0px)';
    }, 1500); 
});

// active links 
const headerLinks = document.querySelectorAll('header ul li a');
function handleScroll() {
    let scrollPosition = window.scrollY;
    const sections = [
        { id: 'about', index: 0 },
        { id: 'partners', index: 1 },
        { id: 'ourSolutions', index: 2 },
        { id: 'services', index: 3 },
        { id: 'articles', index: 4 },
        { id: 'contact', index: 5 }
    ];
    let activeSection = ''; 
    sections.forEach(section => {
        const sectionElement = document.getElementById(section.id);
        if (sectionElement) {
            const sectionTop = sectionElement.offsetTop;
            const sectionBottom = sectionTop + sectionElement.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSection = section.id;
            }
        }
    });
    headerLinks.forEach(link => {
        const linkHref = link.getAttribute('href').substring(1); 
        if (linkHref === activeSection) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}
window.addEventListener('scroll', handleScroll);
handleScroll();

