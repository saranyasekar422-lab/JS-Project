// hero carousel
$('.h-c').owlCarousel({
  loop: true,
  margin: 30,
  
  dots:false,
  responsive: {
    0: { items: 2 },
    600: { items: 4 },
    1000: { items: 5 }
  }
});

// award carousel
$('.award').owlCarousel({
  loop: true,
  margin: 80,
  autoplay: true,
  autoplayTimeout:4500,
  items:1,
  dots:false
});

// testimonial carousel

$('.test').owlCarousel({
  margin: 30,
  items: 1,
  nav: true,   // enable buttons
  dots: false,
  animateOut: 'fadeOut',
  stagePadding: 30,
  smartSpeed: 450,
  navText: [
    '<i class="fa-solid fa-arrow-left-long"></i>',
    '<i class="fa-solid fa-arrow-right"></i>'
  ]
});

// case studies
$('.case-o').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    }
})


// blog owl carousel
$('.insi').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots:false,
    navText: ['<i class="fa-solid fa-circle-dot"></i>', '<i class="fa-solid fa-circle-dot"></i>'],
    responsive:{
        0:{ items:1 },
        600:{ items:2 },
        1000:{ items:2.3 }
    }
});



// tab content

let arti = document.getElementById("ai");
let consult = document.getElementById("cs");
let business = document.getElementById("bi");
let cloud = document.getElementById("cd");
let data = document.getElementById("das");




function changeai(){
    arti.style.display= "block";
    consult.style.display= "none";
    business.style.display ="none"
    cloud.style.display ="none";
    data.style.display ="none";
    
}

function changecs(){
    arti.style.display="none";
    consult.style.display="block";
    business.style.display = "none";
    cloud.style.display ="none";
    data.style.display ="none";
}

function changebi(){
    arti.style.display="none";
    consult.style.display="none";
    business.style.display = "block";
    cloud.style.display ="none";
    data.style.display ="none";
}

function changecd(){
    arti.style.display="none";
    consult.style.display="none";
    business.style.display = "none";
    cloud.style.display ="block";
    data.style.display ="none";
}

function changedas(){
    arti.style.display="none";
    consult.style.display="none";
    business.style.display = "none";
    cloud.style.display ="none";
    data.style.display ="block";
}


// nav-btns

let home = document.getElementById("home-li");
let service = document.getElementById("service-li");
let indus = document.getElementById("indus-li");
let pages = document.getElementById("page-li");
let blog =document.getElementById("blog-li");

function changehome(){
    home.style.display= "block";
    service.style.display ="none";
    indus.style.display ="none";
    pages.style.display ="none";
    blog.style.display ="none";
}

function changeservice(){
     home.style.display= "none";
    service.style.display ="block";
    indus.style.display ="none";
    pages.style.display ="none";
    blog.style.display ="none";
}

function changeindus(){
     home.style.display= "none";
    service.style.display ="none";
    indus.style.display ="block";
    pages.style.display ="none";
    blog.style.display ="none";
}

function changepages(){
     home.style.display= "none";
    service.style.display ="none";
    indus.style.display ="none";
    pages.style.display ="block";
    blog.style.display ="none";
}

function changeblog(){
     home.style.display= "none";
    service.style.display ="none";
    indus.style.display ="none";
    pages.style.display ="none";
    blog.style.display ="block";
}

function hideAll() {
    home.style.display = "none";
    service.style.display = "none";
    indus.style.display = "none";
    pages.style.display = "none";
    blog.style.display = "none";
}

function toggleMenu(menu) {
    if (menu.style.display === "block") {
        menu.style.display = "none"; // close if already open
    } else {
        hideAll(); // close others
        menu.style.display = "block"; // open clicked one
    }
}

// attach functions
function changehome() { toggleMenu(home); }
function changeservice() { toggleMenu(service); }
function changeindus() { toggleMenu(indus); }
function changepages() { toggleMenu(pages); }
function changeblog() { toggleMenu(blog); }

document.addEventListener("click", function(event) {
    if (!event.target.closest(".nav")) {
        hideAll(); // close all dropdowns if click outside nav
    }
});


//nav-bar fixed

window.addEventListener("scroll", function() {
  let navbar = document.querySelector(".top-container1");
  if (window.scrollY > 180) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});




const counters = document.querySelectorAll('.count');
const speed = 120; // Adjust speed (higher = slower)

counters.forEach((counter) => {
    function updateCounter() {
        const target = Number(counter.getAttribute('data-target'));
        const current = Number(counter.innerText);
        const increment = Math.ceil(target / speed);

        if (current < target) {
            counter.innerText = current + increment;
            setTimeout(updateCounter, 10); // repeat every 20ms
        } else {
            counter.innerText = target; // stop at exact target
        }
    }

    updateCounter();
});








const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // stop submit

  // Get elements
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const company = document.getElementById("company");
  const service = document.getElementById("service");
  const message = document.getElementById("message");
  const file = document.getElementById("file");

  // Clear old errors
  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  let valid = true;

  // Name
  if (name.value.trim() === "") {
    document.getElementById("nameError").textContent = "Name is required";
    valid = false;
  }

  // Email
  if (!email.value.match(/^[^ ]+@[^ ]+\.[a-z]{2,}$/)) {
    document.getElementById("emailError").textContent = "Enter a valid email";
    valid = false;
  }

  // Phone
  if (!phone.value.match(/^[0-9]{10}$/)) {
    document.getElementById("phoneError").textContent = "Enter 10-digit phone";
    valid = false;
  }

  // Company
  if (company.value.trim() === "") {
    document.getElementById("companyError").textContent = "Company is required";
    valid = false;
  }

  // Service
  if (service.value === "") {
    document.getElementById("serviceError").textContent = "Please select service";
    valid = false;
  }

  // Message
  if (message.value.trim().length < 10) {
    document.getElementById("messageError").textContent = "At least 10 characters";
    valid = false;
  }

  // File
  if (file.files.length === 0) {
    document.getElementById("fileError").textContent = "Attach a file";
    valid = false;
  }

  // If all good
  if (valid) {
    alert("Form submitted successfully!");
    form.reset(); // clear form
  }
});


// Get the button
let mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
       mybutton.style.display = "block";
   } else {
       mybutton.style.display = "none";
   }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
   document.body.scrollTop = 0; // For Safari
   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}














