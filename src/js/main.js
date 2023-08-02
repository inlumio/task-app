import { notes, setNotes } from './data/notes';
import { Categories } from './data/categories';

const createBtn = document.querySelector('.create-btn');

createBtn.addEventListener('click', () => {
	const note = {
		id: notes.at(-1)?.id + 1 || 1,
		title: 'New Note',
		content: 'New Note Content',
		date: new Intl.DateTimeFormat('en-US').format(new Date()),
		category: Categories.Task.name,
		dates: [],
		archived: false,
	};

	setNotes([...notes, note]);
	console.log(note);
	console.log(notes);
});
