import { notes, setNotes } from './data/notes';
import { Categories } from './data/categories';

const createBtn = document.querySelector('.create-btn');
const modal = document.querySelector('.modal');
const modalForm = modal.querySelector('form');
const submitModalBtn = modal.querySelector('button[type=submit]');
const closeModalBtn = modal.querySelector('button[type=button]');
const resetFormBtn = modal.querySelector('button[type=reset]');
const nameField = document.querySelector('input[name="name"]');
const contentField = document.querySelector('textarea[name="content"]');
const categoryField = document.querySelector('select[name="category"]');

modal.addEventListener('click', (e) => {
	const dialogDimensions = modal.getBoundingClientRect();
	if (
		e.clientX < dialogDimensions.left ||
		e.clientX > dialogDimensions.right ||
		e.clientY < dialogDimensions.top ||
		e.clientY > dialogDimensions.bottom
	) {
		modal.close();
	}

	if (e.target === submitModalBtn) {
		e.preventDefault();
		if (!nameField.value) {
			nameField.setAttribute('aria-invalid', 'true');
			return;
		} else {
			nameField.setAttribute('aria-invalid', 'false');
		}
		if (contentField.value.length < 10) {
			contentField.setAttribute('aria-invalid', 'true');
			return;
		} else {
			contentField.setAttribute('aria-invalid', 'false');
		}

		modal.close();
		modalForm.reset();
	}
	if (e.target === closeModalBtn) {
		modal.close();
	}
});

createBtn.addEventListener('click', () => {
	modal.showModal();

	// const note = {
	// 	id: notes.at(-1)?.id + 1 || 1,
	// 	title: 'New Note',
	// 	content: 'New Note Content',
	// 	date: new Intl.DateTimeFormat('en-US').format(new Date()),
	// 	category: Categories.Task.name,
	// 	dates: [],
	// 	archived: false,
	// };

	// setNotes([...notes, note]);
	// console.log(note);
	// console.log(notes);
});
