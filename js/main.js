//>>>> handling menu in small screens
let navBar = document.querySelector(".header .nav-bar");
let navMenu = document.querySelector(".header .nav ul");
//[1] stopPropagation in bar and ul
navMenu.addEventListener("click", (e) => {
  e.stopPropagation();
});
navBar.addEventListener("click", (e) => {
  e.stopPropagation();
});
//[2] the nav-bar ---> toggle
navBar.onclick = function () {
  navMenu.classList.toggle("show");
};
//[3] clicking outside ul ----> close ul if showen
window.addEventListener("click", (e) => {
  if (e.target != navBar) {
    if (navMenu.classList.contains("show")) {
      navMenu.classList.remove("show");
    }
  }
});
//________________________________
//_________________________________________
/* the slider section */
let slides = document.querySelectorAll(".slider img");
let slidingBtns = document.querySelectorAll(".sliding-buttons span");

slidingBtns.forEach((btn) => {
  btn.onclick = function () {
    slidingBtns.forEach((bt) => {
      bt.classList.remove("active");
    });
    this.classList.add("active");

    slides.forEach((img) => {
      img.classList.remove("active");
    });
    document.querySelector(`${this.dataset.slide}`).classList.add("active");
  };
});
//________________________________
//___________________________________________
