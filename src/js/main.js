import {
	notes,
	updateNote,
	addNote,
	toggleArchiveNote,
	deleteNote,
} from './data/notes';
import {
	renderNotes,
	renderSummary,
	setTableHandlers,
	getTogglerValue,
} from './ui/tables';
import { performAddModal, performEditModal } from './ui/modal';
import { findDatesInString } from './utills/findDatesInString';
import { countNotesByCategory } from './utills/countNotesCategories';

const updateUI = () => {
	const typedNotes = notes.filter(
		(note) => note.archived === getTogglerValue()
	);

	renderNotes(
		typedNotes.map((note) => ({
			...note,
			dates: findDatesInString(note.content),
		}))
	);

	renderSummary(countNotesByCategory(notes));
};

const editHandler = (id) => {
	let selectedNote = notes.find((note) => note.id === id);
	performEditModal(selectedNote, (editedNoteData) => {
		let editedNote = { ...selectedNote, ...editedNoteData };
		updateNote(editedNote);
		updateUI();
	});
};

const addHandler = () => {
	performAddModal((newNoteData) => {
		console.log(newNoteData);
		let created = new Intl.DateTimeFormat('en-US').format(new Date());
		let newNote = {
			...newNoteData,
			created,
			archived: false,
			id: (notes.at(-1)?.id || 0) + 1,
		};
		addNote(newNote);
		updateUI();
	});
};

const deleteHandler = (id) => {
	deleteNote(id);
	updateUI();
};

const archiveHandler = (id) => {
	toggleArchiveNote(id);
	updateUI();
};

const archiveAllHandler = () => {
	const displayedNotes = notes.filter(
		(note) => note.archived === getTogglerValue()
	);
	console.log(displayedNotes);
};

const deleteAllHandler = () => {};

const togglerChangeHandler = () => updateUI();

setTableHandlers(
	addHandler,
	editHandler,
	deleteHandler,
	archiveHandler,
	deleteAllHandler,
	archiveAllHandler,
	togglerChangeHandler
);

updateUI();
