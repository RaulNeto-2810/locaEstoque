// Função para abrir/fechar o pop-up de login
function toggleModal() {
  const modal = document.getElementById('modal');
  modal.classList.toggle('hidden');
}

// Fechar o pop-up ao clicar fora dele
window.addEventListener('click', function(event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    toggleModal();
  }
});
