
// sidebar slider open
// const sidebar = document.getElementById("sidebar");
// const hamburger = document.getElementById("hamburger");

// hamburger.addEventListener("click", () =>{
//   sidebar.classList.toggle("open");

// });

// Sidebar slider
function openSlideMenu() {
  document.getElementById('sidebar').style.transform = "translateX(0)";
}
function closeSlideMenu() {
  document.getElementById('sidebar').style.transform = "translateX(-400px)";
}

// Pricing card flips
function frontCardFlip() {
  document.getElementById('front_card--1').style.transform = "rotateY(-180deg)";
  document.getElementById('back_card--1').style.transform = "rotateY(0)";
}









