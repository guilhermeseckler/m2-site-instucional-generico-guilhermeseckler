document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modal');
    const buttonHeader = document.querySelector('.header__button');
    const buttonFaq = document.querySelector('.faq__button');
    const closeButton = document.querySelector('.modal__close');

    buttonHeader.addEventListener('click', () => {
        modal.showModal();
    });

    buttonFaq.addEventListener('click', () => {
        modal.showModal();
    });

    closeButton.addEventListener('click', () => {
        modal.close()
    });
});