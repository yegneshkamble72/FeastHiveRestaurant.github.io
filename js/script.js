//-----Preloader----

var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
  loader.style.display = "none";
})


// ---------Navigation------

const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());


// --Learn More Infomation---

document.getElementById("learnMoreBtn").addEventListener("click", function () {
  var moreInfo = document.getElementById("moreInfo");
  if (moreInfo.classList.contains("hidden")) {
    moreInfo.classList.remove("hidden");
    this.textContent = "Show Less";
  } else {
    moreInfo.classList.add("hidden");
    this.textContent = "Learn More";
  }
});



$(function () {
  // ------- WOW ANIMATED ------ //
  wow = new WOW({
    mobile: false,
  });
  wow.init();

  // HIDE MOBILE MENU AFTER CLIKING ON A LINK
  $(".navbar-collapse a").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // NIVO LIGHTBOX
  $("#menu a").nivoLightbox({
    effect: "fadeScale",
  });
});


