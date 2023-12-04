const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalClose = document.querySelectorAll(".services__modal-close");

let modal = function (modalClicked) {
  modalViews[modalClicked].classList.add("active-modal");
};

modalBtns.forEach((btn, i) => btn.addEventListener("click", () => modal(i)));

// modal close function
modalClose.forEach((btn) =>
  btn.addEventListener("click", () => {
    modalViews.forEach((modal) => modal.classList.remove("active-modal"));
  }),
);
