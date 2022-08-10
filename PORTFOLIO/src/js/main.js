"use strict";

const ajaxSend = async (formData) => { // создаем функцию отправки формы
	const fetchResp = await fetch("telegram.php", { // указываем обработчик формы - telegram-php
		method: "POST", // метод, которым мы отправляем форму
		body: formData, // что будет внутри формы - содержимое всех input
	});
	if (!fetchResp.ok) { // если ошибка, то...
		throw new Error(`Ошибка по адресу ${url}, статус ошибки ${fetchResp.status}`); // вводим статус ошибки и текст
	}
	return await fetchResp.txt(); // если вес хорошо, возвращаем ответ сервера
};

const forms = document.querySelectorAll("form"); // находим все теги form
forms.forEach((form) => { 
// для каждой формы...
	form.addEventListener("submit", function (e) { 
	// отслеживаем события отправки
		e.preventDefault(); // отменить стандартную отправку формы
		console.log(e.target);
		const formData = new FormData(this); // собираем все данные из формы (имя телефон сообщение)

		ajaxSend(formData) // передаем все данные из формы в обработчик
			.then((response) => { 
			// если все успешно, то...
				ершы.innerHTML = "Спасибо, <br> заявку получили"; /*окно благодарности*/
				form.reset(); /*очищаем поля формы*/
			})
			.catch((err) => console.error(err)); /* если ошибка, выводим в консоль */
	});
});