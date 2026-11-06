
const profileName = document.querySelector('.profile__name');
const openModalBtn = document.querySelector('.profile__edit-btn');
const modalDialog = document.querySelector('dialog'); // тег dialog
const closeModalBtn = document.querySelector('.dialog__close-btn');
const editForm = document.querySelector('form');
const nameInput = document.querySelector('input[type="text"]');


openModalBtn.addEventListener('click', () => {

    nameInput.value = profileName.textContent.trim();
    modalDialog.showModal();
});


closeModalBtn.addEventListener('click', () => {
    modalDialog.close();
});


editForm.addEventListener('submit', (event) => {
    
    event.preventDefault();

    
    const newName = nameInput.value.trim();

    
    if (newName !== '') {
        profileName.textContent = newName;
        modalDialog.close();
    } else {
        
        alert('Имя не может быть пустым!');
    }
});

