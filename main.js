const btn = document.querySelector(".btn");
const bar = document.querySelector(".bar");
const list = document.querySelector(".list");
const sidebar = document.querySelector(".sidebar");

window.addEventListener("resize", function (size) {
  if (size.target.innerWidth < 790) {
    btn.style.display = "none";
    bar.style.display = "block";
    list.style.display = "none";
  } else {
    btn.style.display = "block";
    bar.style.display = "none";
    list.style.display = "block";
  }
});

bar.addEventListener("click", function () {
  sidebar.classList.toggle("sidebar-active");
});
