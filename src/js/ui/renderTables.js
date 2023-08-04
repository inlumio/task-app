const renderNotes = (tableBody, notes) => {
	tableBody.innerHTML = '';
	notes.forEach((note) => {
		tableBody.innerHTML += `
		<tr data-note-i ="">
							<td class="px-4 py-2 bg-slate-200">
								<div class="rounded-full p-2 bg-slate-600 inline-flex">
									<i class="bx bx-task text-white"></i>
								</div>
							</td>
							<td class="px-4 py-2 bg-slate-200 text-black font-bold truncate">
								Shopping list
							</td>
							<td
								class="px-4 py-2 bg-slate-200 text-slate-600 font-normal truncate"
							>
								April 27, 2021
							</td>
							<td
								class="px-4 py-2 bg-slate-200 text-slate-600 font-normal truncate"
							>
								Task
							</td>
							<td
								class="px-4 py-2 bg-slate-200 text-slate-600 font-normal truncate max-w-xs"
							>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								Facere, quidem minima iusto sed veniam incidunt repellat enim
								soluta iste aliquid, cupiditate mollitia! Provident architecto
								fuga ullam quaerat obcaecati, quidem harum.
							</td>
							<td
								class="px-4 py-2 bg-slate-200 text-slate-600 font-normal"
							></td>
							<td class="px-4 py-2 bg-slate-200 text-slate-600 font-normal">
								<i class="bx bxs-edit"></i>
							</td>
							<td class="px-4 py-2 bg-slate-200 text-slate-600 font-normal">
								<i class="bx bxs-archive-in"></i>
							</td>
							<td class="px-4 py-2 bg-slate-200 text-slate-600 font-normal">
								<i class="bx bxs-trash"></i>
							</td>
						</tr>
		`;
	});
};

const renderSummary = (tableBody, summaryData) => {};

export { renderNotes, renderSummary };
