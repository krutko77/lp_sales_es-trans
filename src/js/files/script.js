// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

// Отключение transition до полной загрузки страницы
if (document.querySelector('.offer-button')) {  //
	let elem = document.querySelector('.offer-button');

	window.onload = function () {
		elem.classList.remove('preload');
	};
}

// Кнопка НАЗАД
if (document.querySelector('.back-button')) {  // Проверяем наличие элемента на странице
	document.querySelector('.back-button').onclick = function () { // Клик по кнопке НАЗАД
		window.history.go(-1); return false;// возвращаемся назад
	};
}

// Защита формы от ботов, проверка через пустое поле
// Форма для страницы услуг
if (document.querySelector('.form-button-customs')) {  // Проверяем наличие элемента на странице
	let code = document.querySelector('#code-customs'); // Получаем скрытый input
	document.querySelector('.form-button-customs').onclick = function () { // Клик по кнопке отправки
		code.value = 'NOSPAM'; // Подставляем значение в value инпута	
	};
}

// Динамического управления aria-hidden. При открытии модального окна удаляет aria-hidden="true" и добавляет его обратно при закрытии. 
document.querySelectorAll('[data-open-popup]').forEach(button => {
	button.addEventListener('click', () => {
		const popupId = button.dataset.openPopup; // Например, data-open-popup="popup-form-customs"
		const popup = document.getElementById(popupId);
		popup.removeAttribute('aria-hidden');
		// Перенос фокуса внутрь попапа
		const firstInput = popup.querySelector('input, button, [tabindex]');
		firstInput?.focus();
	});
});

document.querySelectorAll('[data-close]').forEach(button => {
	button.addEventListener('click', () => {
		const popup = button.closest('.popup');
		popup.setAttribute('aria-hidden', 'true');
	});
});

// Переключение на страницу благодарности после отправки формы
document.addEventListener('formSent', function (event) {
	location = 'https://eli.es-trans.ru/thank-you-page.html';
}, false);