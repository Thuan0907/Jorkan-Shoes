function getId(id) {
  return document.getElementById(id);
}

var navContent = getId("navContent");
function showNavContent() {
  navContent.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closePanel() {
  navContent.classList.remove("active");
  document.body.style.overflow = "auto";
}

window.onscroll = function () {
  myFunction();
};

var wrapNav = document.querySelector("#navBar");
var sticky = wrapNav.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    wrapNav.classList.add("sticky");
  } else {
    wrapNav.classList.remove("sticky");
  }
}

// var mybutton = document.getElementById("scrollTop");
// window.onscroll = function () {
//   scrollFunction();
// };
// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }
