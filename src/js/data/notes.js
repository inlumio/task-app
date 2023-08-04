import { Categories } from './categories';

let notes = [
	{
		id: 1,
		name: 'Shopping list',
		created: '2021/3/20',
		category: Categories.Task,
		content: 'Tomatoes, bread',
		dates: [],
		archived: false,
	},
	{
		id: 2,
		name: 'The theory of evolution',
		created: '2021/3/27',
		category: Categories.RandomThought,
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem',
		dates: [],
		archived: false,
	},
	{
		id: 3,
		name: 'New Feature',
		created: '2021/3/27',
		category: Categories.Idea,
		content: 'Implement new feature on 3/5/2021 and 5/5/2021',
		dates: ['3/5/2021', '5/5/2021'],
		archived: false,
	},
	{
		id: 4,
		name: 'Hamlet',
		created: '2021/4/2',
		category: Categories.Quote,
		content: 'To be or not to be',
		dates: [],
		archived: false,
	},
	{
		id: 5,
		name: 'Books',
		created: '2021/4/6',
		category: Categories.Task,
		content: 'Buy "The Lord of the Rings" on sale 2021/4/10',
		dates: [],
		archived: false,
	},
	{
		id: 6,
		name: 'Why grass is green',
		created: '2021/4/21',
		category: Categories.RandomThought,
		content: 'Because it is',
		dates: [],
		archived: false,
	},
	{
		id: 7,
		name: 'Oscar Wilde',
		created: '2021/5/4',
		category: Categories.Quote,
		content: 'Be yourself; everyone else is already taken.',
		dates: [],
		archived: false,
	},
];

const setNotes = (newNotes) => {
	notes = newNotes;
};

const addNote = (newNote) => {
	notes = [...notes, newNote];
};

const toggleArchiveNote = (id) => {
	const index = notes.findIndex((note) => note.id === id);
	notes[index].archived = !notes[index].archived;
};

const deleteNote = (id) => {
	notes = notes.filter((note) => note.id !== id);
};

const updateNote = (updatedNote) => {
	const index = notes.findIndex((note) => note.id === updatedNote.id);
	notes[index] = updatedNote;
};

export { notes, setNotes };
