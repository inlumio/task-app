const Categories = Object.freeze({
	Task: 'Task',
	RandomThought: 'Random Thought',
	Idea: 'Idea',
	Quote: 'Quote',
});

const Icons = Object.freeze({
	[Categories.Task]: 'bx bx-task',
	[Categories.RandomThought]: 'bx bx-chat',
	[Categories.Idea]: 'bx bx-bulb',
	[Categories.Quote]: 'bx bxs-quote-alt-right',
});

export { Categories, Icons };
