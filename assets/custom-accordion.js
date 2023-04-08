// Selection de tous les éléments avec la classe 'coll-box'
const collapsibleText = document.querySelectorAll(".coll-box");
// Pour chaque élément , on ajoute un event listener de clic
collapsibleText.forEach((box) => {
  box.addEventListener("click", () => {
    // On ajoute la classe 'active' à l'élément cliqué
    box.classList.toggle("active");
    // On met à jour la valeur de l'attribut 'aria-expanded'
    const expanded = box.getAttribute("aria-expanded") === "true" ? "false" : "true";
    box.setAttribute("aria-expanded", expanded);
  });
});
