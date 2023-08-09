// Função para abrir/fechar o pop-up de login
function toggleModal() {
  const modal = document.getElementById('modal');
  modal.classList.toggle('hidden');
}
// Função para abrir/fechar o pop-up de Cadastro
function toggleModal2() {
  const modal = document.getElementById('modal2');
  modal2.classList.toggle('hidden');
}


// Fechar o pop-up ao clicar fora dele
window.addEventListener('click', function(event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    toggleModal();
  }
});
window.addEventListener('click', function(event) {
  const modal = document.getElementById('modal2');
  if (event.target === modal) {
    toggleModal2();
  }
});

document.getElementById("button").addEventListener("click", function () {
  // Obtém os valores dos campos de senha
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Verifica se as senhas coincidem
  if (password !== confirmPassword) {
    // Mostra a mensagem de erro
    document.getElementById("error-message").style.display = "block";
  } else {
    // As senhas coincidem, permita o envio do formulário
    document.getElementById("error-message").style.display = "none";
    // Aqui você pode adicionar o código para enviar o formulário, por exemplo:
    // document.getElementById("form").submit();
  }
});
