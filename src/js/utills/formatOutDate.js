const formatDate = (dateString) => {
	const date = new Date(dateString);
	const options = { month: 'long', day: '2-digit', year: 'numeric' };
	return date.toLocaleDateString('en-US', options);
};

export { formatDate };
