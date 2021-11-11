const modal = document.getElementById('modal');

const modalToggle = document.getElementById('myModal');
const modalClose = document.querySelector('.modal__close');

modalToggle.onclick = function () {
  modal.style.display = 'block';
};

modalClose.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
};
