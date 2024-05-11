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

/*Elements-Modal-Login*/
const loginModal = document.querySelector(".modal-container2");
const loginBtn = document.querySelector(".btn-login");
const loginClose = document.querySelector(".btn-close-login");
/* Events-Modal-Login */
loginBtn.addEventListener("click", function () {
  loginModal.style.display = "block";
});

loginClose.addEventListener("click", function () {
  loginModal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == loginModal) {
    loginModal.style.display = "none";
  }
});
