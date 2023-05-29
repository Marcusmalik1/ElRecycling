

// Filtrering af kategorier (for-løkke)

  function filterProducts(filter) {
    var products = document.getElementsByClassName('produktbeskrivelse');

    for (var i = 0; i < products.length; i++) {
      var dataFilter = products[i].getElementsByTagName('img')[0].getAttribute('data-filter');
      
      if (filter === 'Alle' || filter === dataFilter) {
        products[i].style.display = 'block';
      } 
      
      else {
        products[i].style.display = 'none';
      }
    }
  }



var popUp = document.getElementById("popUp");
var modalBtns = document.querySelectorAll(".productbtn");
var closeBtn = document.getElementsByClassName("close")[0];

// Åben popop
function openModal() {
  popUp.style.display = "block";
}

// Luk popop
function closeModal() {
  popUp.style.display = "none";
}

// Åbning og lukkefunktion til hver enkelt knap
modalBtns.forEach(function(btn) {
  btn.addEventListener("click", openModal);
});

// Luk-knappen ved modal
closeBtn.onclick = function() {
  closeModal();
};

// Klik udenfor modal for at lukke den
window.onclick = function(event) {
  if (event.target == popUp) {
    closeModal();
  }
};

  







