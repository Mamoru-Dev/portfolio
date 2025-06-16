document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger");
  const mobileNav = document.getElementById("mobileNav");

  burger.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
  });
});
