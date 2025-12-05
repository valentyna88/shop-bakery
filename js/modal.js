const modal = document.querySelector('.backdrop');
const modalBtnClose = document.querySelector('.modal-btn-close');
const modalOpenButtons = document.querySelectorAll('.modal-btn-open');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalOpenButtons.forEach(button => {
  button.addEventListener('click', toggleModal);
});

modalBtnClose.addEventListener('click', toggleModal);
