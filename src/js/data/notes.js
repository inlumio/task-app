import { Categories } from './categories';

let notes = [
	{
		id: 1,
		name: 'Shopping list',
		created: '2021/3/20',
		category: Categories.Task.name,
		content: 'Tomatoes, bread',
		dates: [],
		archived: false,
	},
	{
		id: 2,
		name: 'The theory of evolution',
		created: '2021/3/27',
		category: Categories.RandomThought.name,
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem',
		dates: [],
		archived: false,
	},
	{
		id: 3,
		name: 'New Feature',
		created: '2021/3/27',
		category: Categories.Idea.name,
		content: 'Implement new feature on 3/5/2021 and 5/5/2021',
		dates: ['3/5/2021', '5/5/2021'],
		archived: false,
	},
	{
		id: 4,
		name: 'Hamlet',
		created: '2021/4/2',
		category: Categories.Quote.name,
		content: 'To be or not to be',
		dates: [],
		archived: false,
	},
	{
		id: 5,
		name: 'Books',
		created: '2021/4/6',
		category: Categories.Task.name,
		content: 'Buy "The Lord of the Rings" on sale 2021/4/10',
		dates: [],
		archived: false,
	},
	{
		id: 6,
		name: 'Why grass is green',
		created: '2021/4/21',
		category: Categories.RandomThought.name,
		content: 'Because it is',
		dates: [],
		archived: false,
	},
	{
		id: 7,
		name: 'Oscar Wilde',
		created: '2021/5/4',
		category: Categories.Quote.name,
		content: 'Be yourself; everyone else is already taken.',
		dates: [],
		archived: false,
	},
];

const setNotes = (newNotes) => {
	notes = newNotes;
};

export { notes, setNotes };
