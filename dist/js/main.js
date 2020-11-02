
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


// Pricing card flip
const toggle = document.getElementById("pricing_card--1");

toggle.addEventListener("click"), () => {
  toggle.classList.toggle("active");
}







