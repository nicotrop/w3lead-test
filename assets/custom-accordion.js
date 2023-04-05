const collapsibleText = document.querySelectorAll(".coll-box");

collapsibleText.forEach((box) => {
  box.addEventListener("click", () => {
    box.classList.toggle("active");
  });
});
