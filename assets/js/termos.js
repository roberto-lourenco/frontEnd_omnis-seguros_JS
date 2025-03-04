document.addEventListener('DOMContentLoaded', function () {
    // Recupera o link dos termos e o modal
    const termsLink = document.getElementById('termsLink');
    const termsModal = new bootstrap.Modal(document.getElementById('termsModal'));

    // Adiciona o evento de clique ao link
    termsLink.addEventListener('click', function(event) {
      event.preventDefault(); 
      termsModal.show(); 
    });
  });