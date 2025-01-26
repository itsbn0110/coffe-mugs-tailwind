const topMenu = document.getElementById("mct-top-menu");

const toogleTopMenuIcon = document.getElementById("mct-top-menu-icon-toogle");

document.addEventListener("click", (e) => {
  if (toogleTopMenuIcon.contains(e.target)) {
    topMenu.classList.toggle("hidden");
    topMenu.classList.toggle("mct-top-menu-expanded");
  } else {
    if (topMenu.classList.contains("mct-top-menu-expanded")) {
      topMenu.classList.remove("mct-top-menu-expanded");
      topMenu.classList.add("hidden");
    }
  }
});
