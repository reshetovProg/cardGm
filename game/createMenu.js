import { createField } from "./createField.js";

export const createMenu = () => {
	const menu = document.querySelector(".menu");
	menu.style.display = "block";

	const btn = menu.querySelectorAll(".btn");
	btn.forEach(el => {
		el.addEventListener('click', () => {
			console.log(el.textContent);
			switch (el.textContent) {
				case "легкий":
					createField(8);
					break;
				case "средний":
					createField(12);
					break;
				case "сложный":
					createField(16);
					break;
			}
		})
	});

}