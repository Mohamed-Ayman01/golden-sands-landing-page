const showImgsBtn = document.querySelector("button.show-img-ar");
const hiddenImgs = document.querySelectorAll(".hidden");
const burgerMenu = document.querySelector("nav ul li.burger");
const dropMenu = document.querySelector("nav ul.menu");

showImgsBtn.onclick = function () {
  if (hiddenImgs[0].classList.contains("hidden")) {
    // Remove Display None From Images
    for (let i = 0; i < hiddenImgs.length; i++) {
      hiddenImgs[i].classList.remove("hidden");
      hiddenImgs[i].classList.add("anim");
    }
    showImgsBtn.innerHTML = "مشاهدة اقل"
  } else {
    // Add Display None From Images
    for (let i = 0; i < hiddenImgs.length; i++) {
      hiddenImgs[i].classList.add("hidden");
      hiddenImgs[i].classList.remove("anim");
    }
    showImgsBtn.innerHTML = "مشاهدة المزيد"
  }
};

burgerMenu.onclick = function () {
  if (dropMenu.classList.contains("hidden")) {
    burgerMenu.style.color = "#ffd6ad"
    dropMenu.classList.remove("hidden");
    dropMenu.classList.add("animation");
  } else {
    burgerMenu.style.color = "white"
    dropMenu.classList.add("hidden");
    dropMenu.classList.remove("animation");
  }
}