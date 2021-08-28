const showImgsBtn = document.querySelector("button.show-img");
const hiddenImgs = document.querySelectorAll(".hidden");

showImgsBtn.onclick = function () {
  if (hiddenImgs[0].classList.contains("hidden")) {
    // Remove Display None From Images
    for (let i = 0; i < hiddenImgs.length; i++) {
      hiddenImgs[i].classList.remove("hidden");
      hiddenImgs[i].classList.add("anim");
    }
    showImgsBtn.innerHTML = "Show Less"
  } else {
    // Add Display None From Images
    for (let i = 0; i < hiddenImgs.length; i++) {
      hiddenImgs[i].classList.add("hidden");
      hiddenImgs[i].classList.remove("anim");
    }
    showImgsBtn.innerHTML = "Show More"
  }
};
