//Active In Links
var nav_links = Array.from(document.querySelectorAll("nav ul > li "));
//Action For click
nav_links.forEach(function (li) {
  li.addEventListener("click", function (ele) {
    nav_links.forEach(function (li) {
      return li.classList.remove("active");
    });
    this.classList.add("active");
  });
});

///Close

let navbarToggler = document.querySelector(".navbar-toggler");
let navbarCollapse = document.querySelector(".navbar-collapse");
let navLinks = document.querySelectorAll(".navbar-nav .nav-link");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navbarCollapse.classList.remove("show");
  });
});

navbarToggler.addEventListener("click", function () {
  
    navbarCollapse.classList.toggle("show");
  
});


//Nav Change Color 

let up = document.querySelector(".UP");
const nav =document.querySelector("nav.navbar");
console.log(up)
function ScrollWindow(){
    if(window.scrollY >= window.innerHeight){
        nav.classList.add("navChangeColor");
        navLinks.classList.add("text-main");
        up.classList.add("hide")
    }else{
        up.classList.remove("hide")

        nav.classList.remove("navChangeColor");
        navLinks.classList.remove("text-main")
    }
}
function scrollTop(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


window.addEventListener("scroll" , ScrollWindow);
 
up.addEventListener("click" , scrollTop)