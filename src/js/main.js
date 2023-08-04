import { notes, setNotes } from './data/notes';
import { renderNotes, setTableHandlers } from './ui/tables';
import { openCreateModal, openEditModal } from './ui/modal';
import { Categories } from './data/categories';

const createBtn = document.querySelector('.create-btn');

createBtn.addEventListener('click', () => {
	openCreateModal();
});

const editHandler = (id) => {
	let editedNote = notes.find((note) => note.id === id);
	openEditModal(editedNote);
};

const addHandler = (note) => {};

const deleteHandler = (id) => {};

const archiveHandler = (id) => {};

const archiveAllHandler = () => {};

const deleteAllHandler = () => {};

setTableHandlers(
	editHandler,
	deleteHandler,
	archiveHandler,
	deleteAllHandler,
	archiveAllHandler
);

renderNotes(notes);
