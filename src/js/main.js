import { notes, setNotes } from './data/notes';
import { renderNotes, renderSummary, setTableHandlers } from './ui/tables';
import { openCreateModal, openEditModal } from './ui/modal';
import { findDatesInString } from './utills/findDatesInString';
import { countNotesByCategory } from './utills/countNotesCategories';

const updateUI = () => {
	renderNotes(
		notes.map((note) => ({ ...note, dates: findDatesInString(note.content) }))
	);

	let summary = countNotesByCategory(notes);
	renderSummary(summary);
};

const editHandler = (id) => {
	let editedNote = notes.find((note) => note.id === id);
	openEditModal(editedNote, (editedNoteData) => {
		console.log(editedNoteData);
	});
};

const addHandler = () => {
	openCreateModal((newNoteData) => {
		console.log(newNoteData);
	});
};

const deleteHandler = (id) => {};

const archiveHandler = (id) => {};

const archiveAllHandler = () => {};

const deleteAllHandler = () => {};

setTableHandlers(
	addHandler,
	editHandler,
	deleteHandler,
	archiveHandler,
	deleteAllHandler,
	archiveAllHandler
);

updateUI();
