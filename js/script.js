
const profileName = document.querySelector('.profile__name'); // или ваш класс текста профиля
const openModalBtn = document.querySelector('.profile__edit-btn'); // или ваш класс кнопки "Изменить имя"
const modalDialog = document.querySelector('dialog'); // тег dialog
const closeModalBtn = document.querySelector('.dialog__close-btn'); // или ваш класс кнопки-крестика ×
const editForm = document.querySelector('form'); // или ваш класс формы внутри диалога
const nameInput = document.querySelector('input[type="text"]'); // или ваш класс поля имени

// Шаг 4: Открытие модального окна по нажатию «Изменить имя»
openModalBtn.addEventListener('click', () => {
    // Перед открытием можно подставить текущее имя в поле ввода
    nameInput.value = profileName.textContent.trim();
    modalDialog.showModal();
});

// Шаг 5: Закрытие окна по нажатию на крестик ×
closeModalBtn.addEventListener('click', () => {
    modalDialog.close();
});

// Шаг 6 и 7: Обработка отправки формы (сохранение изменений)
editForm.addEventListener('submit', (event) => {
    // Отменяем стандартное действие отправки формы (перезагрузку страницы)
    event.preventDefault();

    // Получаем значение из поля ввода и убираем лишние пробелы
    const newName = nameInput.value.trim();

    // Проверяем: если строка непустая, меняем имя и закрываем окно
    if (newName !== '') {
        profileName.textContent = newName;
        modalDialog.close();
    } else {
        // Иначе оставляем диалог открытым (можно добавить визуальное предупреждение)
        alert('Имя не может быть пустым!');
    }
});

