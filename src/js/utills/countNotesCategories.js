const countNotesByCategory = (notes) => {
	const categoriesCount = notes.reduce((accumulator, note) => {
		const categoryName = note.category;
		if (!accumulator[categoryName]) {
			accumulator[categoryName] = {
				categoryName,
				archived: 0,
				active: 0,
			};
		}

		if (note.archived) {
			accumulator[categoryName].archived++;
		} else {
			accumulator[categoryName].active++;
		}

		return accumulator;
	}, {});

	return Object.values(categoriesCount);
};

export { countNotesByCategory };
