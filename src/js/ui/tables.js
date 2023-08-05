import { Categories } from '../data/categories';

const notesTable = document.querySelector('.note-table');
const notesTableBody = notesTable.querySelector('tbody');
const summaryTable = document.querySelector('.summary-table');
const summaryTableBody = summaryTable.querySelector('tbody');

let editNoteHandler = null;
let deleteNoteHandler = null;
let deleteAllHandler = null;
let archiveNoteHandler = null;
let archiveAllHandler = null;

const setTableHandlers = (
	editNote,
	deleteNote,
	archiveNote,
	deleteAll,
	archiveAll
) => {
	editNoteHandler = editNote;
	deleteNoteHandler = deleteNote;
	archiveNoteHandler = archiveNote;
	deleteAllHandler = deleteAll;
	archiveAllHandler = archiveAll;
};

const renderNotes = (notes) => {
	notesTableBody.innerHTML = '';
	if (notes.length === 0) {
		notesTableBody.innerHTML = `
		<tr>
			<td class="px-4 py-2 bg-slate-200 text-slate-600 font-normal text-center" colspan="9">
				No notes yet
			</td>
		</tr>
		`;
	}

	notes.forEach((note) => {
		notesTableBody.innerHTML += `
		<tr data-note-id="${note.id}">
							<td class="px-4 py-2 bg-slate-200">
								<div class="rounded-full p-2 bg-slate-600 inline-flex">
									<i class="${note.category.icon} text-white"></i>
								</div>
							</td>
							<td class="px-4 py-2 bg-slate-200 text-black font-bold truncate">
								${note.name}
							</td>
							<td
								class="px-4 py-2 bg-slate-200 text-slate-600 font-normal truncate"
							>
								${note.created}
							</td>
							<td
								class="px-4 py-2 bg-slate-200 text-slate-600 font-normal truncate"
							>
								${note.category.name}
							</td>
							<td
								class="px-4 py-2 bg-slate-200 text-slate-600 font-normal truncate max-w-xs"
							>
								${note.content}
							</td>
							<td
								class="px-4 py-2 bg-slate-200 text-slate-600 font-normal"
							>
								${note.dates.join(', ')}
							</td>
							<td class="px-4 py-2 bg-slate-200 text-slate-600 font-normal cursor-pointer" data-role='edit'>
								<i class="bx bxs-edit"></i>
							</td>
							<td class="px-4 py-2 bg-slate-200 text-slate-600 font-normal cursor-pointer" data-role='archive'>
								<i class="bx bxs-archive-in"></i>
							</td>
							<td class="px-4 py-2 bg-slate-200 text-slate-600 font-normal cursor-pointer" data-role='delete'>
								<i class="bx bxs-trash"></i>
							</td>
						</tr>
		`;
	});
};

const renderSummary = () => {};

notesTable.addEventListener('click', (e) => {
	const role = e.target.closest('[data-role]')?.dataset.role;
	const noteId = parseInt(e.target.closest('[data-note-id')?.dataset.noteId);
	if (role === 'edit') {
		editNoteHandler(noteId);
	} else if (role === 'archive') {
		archiveNoteHandler(noteId);
	} else if (role === 'delete') {
		deleteNoteHandler(noteId);
	}
});

export { renderNotes, setTableHandlers };