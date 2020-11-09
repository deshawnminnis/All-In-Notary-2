
// Smooth Scrolling
$("#navbar a, #sidebar a, #footer_links a, #Booking a, .btn").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});

// Sidebar slider
function openSlideMenu() {
  document.getElementById('sidebar').style.transform = "translateX(0)";
}
function closeSlideMenu() {
  document.getElementById('sidebar').style.transform = "translateX(-400px)";
}


// This will enable hover effect on touchscreens
document.addEventListener("touchstart", function() {}, true);









