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
const notesTable = document.querySelector('.note-table');
const summaryTable = document.querySelector('.summary-table');

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
		let invalid = false;
		if (!nameField.value) {
			nameField.setAttribute('aria-invalid', 'true');
			invalid = true;
		} else {
			nameField.setAttribute('aria-invalid', 'false');
		}
		if (contentField.value.length < 10) {
			contentField.setAttribute('aria-invalid', 'true');
			invalid = true;
		} else {
			contentField.setAttribute('aria-invalid', 'false');
		}

		if (invalid) return;

		modal.close();
		modalForm.reset();
	}

	if (e.target === closeModalBtn) {
		modal.close();
	}

	if (e.target === resetFormBtn) {
		modalForm.reset();
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
