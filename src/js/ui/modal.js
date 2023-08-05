const modal = document.querySelector('.modal');
const modalForm = modal.querySelector('form');
const submitModalBtn = modal.querySelector('[data-submit]');
const closeModalBtn = modal.querySelector('[data-close]');
const resetFormBtn = modal.querySelector('[data-reset]');
const nameField = document.querySelector('input[name="name"]');
const contentField = document.querySelector('textarea[name="content"]');
const categoryField = document.querySelector('select[name="category"]');

let lastNote = null;
let modalAction = null;

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

closeModalBtn.addEventListener('click', () => modal.close());

resetFormBtn.addEventListener('click', () =>
	lastNote ? setFormFields(lastNote) : modalForm.reset()
);

const setFieldsValidation = (nameValid, contentValid) => {
	nameField.setAttribute('aria-invalid', !nameValid);
	contentField.setAttribute('aria-invalid', !contentValid);
};

modalForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const nameCheck = nameField.value.length > 0;
	const contentCheck = contentField.value.length > 10;

	setFieldsValidation(nameCheck, contentCheck);

	if (!(nameCheck && contentCheck)) return;

	if (modalAction)
		modalAction({
			name: nameField.value,
			content: contentField.value,
			category: categoryField.value,
		});
	modal.close();
	modalForm.reset();
	lastNote = null;
	modalAction = null;
});

const setFormFields = ({ name, content, category }) => {
	nameField.value = name;
	contentField.value = content;
	categoryField.value = category;
};

const openCreateModal = (createHandler) => {
	setFieldsValidation(true, true);
	if (lastNote) {
		modalForm.reset();
		lastNote = null;
	}
	modalAction = createHandler;
	modal.showModal();
};

const openEditModal = (editedNote, editHandler) => {
	setFormFields(editedNote);
	if (lastNote !== editedNote) {
		setFieldsValidation(true, true);
		lastNote = editedNote;
	}
	modalAction = editHandler;
	modal.showModal();
};

export { openCreateModal, openEditModal };
