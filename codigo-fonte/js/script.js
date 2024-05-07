/* Elements */
const cadastroModal = document.querySelector(".modal-container");
const cadastroBtn = document.querySelector(".default-btn");
const cadastroClose = document.querySelector(".btn-close-cadastro");

/* Events */
cadastroBtn.addEventListener("click", function () {
  cadastroModal.style.display = "block";
});

cadastroClose.addEventListener("click", function () {
  cadastroModal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == cadastroModal) {
    cadastroModal.style.display = "none";
  }
});
