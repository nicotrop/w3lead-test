var slideIndex = 1;
displaySlide(slideIndex);

// Fonction pour changer de slide
function moveSlides(n) {
  displaySlide((slideIndex += n));
}

// Fonction pour changer de slide en cliquant sur la miniature
function activeSlide(n) {
  displaySlide((slideIndex = n));
}

// Fonction pour changer de slide en cliquant sur les flèches
function displaySlide(n) {
  var i;
  // On récupère tous les slides et les miniatures
  var totalslides = document.getElementsByClassName("slide");
  var totaldots = document.getElementsByClassName("custom-thumbnail");

  // Si on dépasse le nombre de slides, on revient au premier
  if (n > totalslides.length) {
    slideIndex = 1;
  }

  // Si on est au premier slide et qu'on clique sur la flèche précédente, on va au dernier slide
  if (n < 1) {
    slideIndex = totalslides.length;
  }

  // On cache tous les slides
  for (i = 0; i < totalslides.length; i++) {
    totalslides[i].style.display = "none";
  }

  // On enlève la classe active de toutes les miniatures
  for (i = 0; i < totaldots.length; i++) {
    totaldots[i].className = totaldots[i].className.replace(" active", "");
  }
  // On affiche le slide actuel
  totalslides[slideIndex - 1].style.display = "block";

  // On ajoute la classe active à la miniature correspondante
  totaldots[slideIndex - 1].className += " active";
}

// Rajout de l'handler pour les clicks pour la gallery fancybox
Fancybox.bind('[data-fancybox="gallery-a"]', {});
