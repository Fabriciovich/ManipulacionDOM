document.addEventListener("DOMContentLoaded", function() {
  let parrafo = document.getElementById("P");
  let button = document.getElementById("Button");
  
  button.addEventListener("click", function() {
      parrafo.classList.toggle("orange");
      parrafo.classList.toggle("purple");
  });
});
