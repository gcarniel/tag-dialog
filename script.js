const $buttonOpenModal = document.querySelector('button');
const $buttonOpenModal2 = document.querySelectorAll('button')[1];
const $buttonCloseModal = document.querySelector('dialog button');
const $dialog = document.querySelector('dialog');

$buttonOpenModal.onclick = () => {
  $dialog.showModal();
};

$buttonOpenModal2.onclick = () => {
  $dialog.show();
};

$buttonCloseModal.onclick = () => $dialog.close();
