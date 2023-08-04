const modal = document.querySelector('.modal');
const modalForm = modal.querySelector('form');
const submitModalBtn = modal.querySelector('[data-submit]');
const closeModalBtn = modal.querySelector('[data-close]');
const resetFormBtn = modal.querySelector('[data-reset]');
const nameField = document.querySelector('input[name="name"]');
const contentField = document.querySelector('textarea[name="content"]');
const categoryField = document.querySelector('select[name="category"]');

modal.addEventListener('click', (e) => {
	const dialogDimensions = modal.getBoundingClientRect();
	if (
		e.clientX < dialogDimensions.left ||
		e.clientX > dialogDimensions.right ||
		e.clientY < dialogDimensions.top ||
		e.clientY > dialogDimensions.bottom
	) {
		modal.close();
	}
});

modalForm.addEventListener('submit', (e) => {
	e.preventDefault();
	let invalid = false;
	if (!nameField.value) {
		nameField.setAttribute('aria-invalid', 'true');
		invalid = true;
	} else {
		nameField.setAttribute('aria-invalid', 'false');
	}
	if (contentField.value.length < 10) {
		contentField.setAttribute('aria-invalid', 'true');
		invalid = true;
	} else {
		contentField.setAttribute('aria-invalid', 'false');
	}

	if (invalid) return;

	modal.close();
	modalForm.reset();
});

const setFormFields = ({ name, content, category }) => {
	nameField.value = name;
	contentField.value = content;
	categoryField.value = category.name;
};

const openCreateModal = () => {
	modal.showModal();
};

const openEditModal = (editedNote) => {
	modal.showModal();

	setFormFields(editedNote);
};

export { openCreateModal, openEditModal };
