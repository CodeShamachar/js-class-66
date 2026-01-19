const drawer = document.getElementById("drawer");
const toggles = document.querySelectorAll(".js-menu-toggle");

toggles.forEach(btn => {
  btn.addEventListener("click", e => {
    e.stopPropagation();
    drawer.classList.toggle("is-open");
  });
});

document.addEventListener("click", e => {
  // drawer.classList.remove("is-open");
  if (!drawer.contains(e.target)) {
    drawer.classList.remove("is-open");
  }
});