document.addEventListener("DOMContentLoaded", function () {
  let menuIcon = document.getElementById("menu-icon");
  let navList = document.querySelector(".navlist");

  menuIcon.addEventListener("click", function () {
    // Toggle kelas "active" pada menu-icon dan navlist
    menuIcon.classList.toggle("active");
    navList.classList.toggle("active");
  });
});
