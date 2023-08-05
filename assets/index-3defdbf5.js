(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function a(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=a(n);fetch(n.href,s)}})();const l=Object.freeze({Task:"Task",RandomThought:"Random Thought",Idea:"Idea",Quote:"Quote"}),k=Object.freeze({[l.Task]:"bx bx-task",[l.RandomThought]:"bx bx-chat",[l.Idea]:"bx bx-bulb",[l.Quote]:"bx bxs-quote-alt-right"});let r=[{id:1,name:"Shopping list",created:"2021/3/20",category:l.Task,content:"Tomatoes, bread",archived:!1},{id:2,name:"The theory of evolution",created:"2021/3/27",category:l.RandomThought,content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem",archived:!1},{id:3,name:"New Feature",created:"2021/3/27",category:l.Idea,content:"Implement new feature on 3/5/2021 and 5/5/2021",archived:!1},{id:4,name:"Hamlet",created:"2021/4/2",category:l.Quote,content:"To be or not to be",archived:!1},{id:5,name:"Books",created:"2021/4/6",category:l.Task,content:'Buy "The Lord of the Rings" on sale 4/10/2021',archived:!1},{id:6,name:"Why grass is green",created:"2021/4/21",category:l.RandomThought,content:"Because it is",archived:!0},{id:7,name:"Oscar Wilde",created:"2021/5/4",category:l.Quote,content:"Be yourself; everyone else is already taken.",archived:!1}];const M=t=>{r=[...r,t]},H=t=>{const e=r.findIndex(a=>a.id===t);r[e].archived=!r[e].archived},S=t=>{r=r.filter(e=>e.id!==t)},A=t=>{const e=r.findIndex(a=>a.id===t.id);r[e]=t},O=t=>{const e=new Date(t),a={month:"long",day:"2-digit",year:"numeric"};return e.toLocaleDateString("en-US",a)},i=document.querySelector(".note-table"),b=i.querySelector("tbody"),C=document.querySelector(".summary-table"),N=C.querySelector("tbody"),D=document.querySelector(".create-btn"),m=i==null?void 0:i.querySelector("#show-archived");let L=null,T=null,q=null,w=null,I=null,E=null,$=null;const R=(t,e,a,o,n,s,f)=>{L=t,T=e,q=a,I=o,w=n,E=s,$=f},v=()=>m==null?void 0:m.checked,Q=t=>{b.innerHTML="",t.length===0&&(b.innerHTML=`
		<tr>
			<td class="px-4 py-2 bg-slate-200 text-slate-600 font-normal text-center" colspan="9">
				No notes yet
			</td>
		</tr>
		`),t.forEach(e=>{b.innerHTML+=`
		<tr data-note-id="${e.id}">
							<td class="px-4 py-2 bg-slate-200 w-10">
								<div class="rounded-full p-2 bg-slate-600 inline-flex">
									<i class="${k[e.category]} text-white"></i>
								</div>
							</td>
							<td class="px-4 py-2 bg-slate-200 text-black font-bold">
								${e.name}
							</td>
							<td
							class="px-4 py-2 bg-slate-200 text-slate-600 font-normal truncate"
							>
							${O(e.created)}
							</td>
							<td
								class="px-4 py-2 bg-slate-200 text-slate-600 font-normal"
							>
							${e.category}
							</td>
							<td
							class="px-4 py-2 bg-slate-200 text-slate-600 font-normal "
							>
								${e.content}
							</td>
							<td
								class="px-4 py-2 bg-slate-200 text-slate-600 font-normal"
							>
								${e.dates.join(", ")}
							</td>
							<td class="px-4 py-2 bg-slate-200 text-slate-600 font-normal cursor-pointer" data-action='edit'>
								<i class="bx bxs-edit"></i>
							</td>
							<td class="px-4 py-2 bg-slate-200 text-slate-600 font-normal cursor-pointer" data-action='archive'>
								<i class="bx bxs-archive-in"></i>
							</td>
							<td class="px-4 py-2 bg-slate-200 text-slate-600 font-normal cursor-pointer" data-action='delete'>
								<i class="bx bxs-trash"></i>
							</td>
						</tr>
		`})},j=t=>{N.innerHTML="",t.forEach(e=>{N.innerHTML+=`
			<tr class=''>
				<td class='px-4 py-2 bg-slate-200 w-0'>
				<div class='rounded-full p-2 bg-slate-600 inline-flex'>
						<i class='${k[e.categoryName]} text-white'></i>
					</div>
				</td>
				<td class='px-4 py-2 bg-slate-200 text-black font-bold truncate'>
					${e.categoryName}
				</td>
				<td class='px-4 py-2 bg-slate-200 text-black truncate'>${e.active}</td>
				<td class='px-4 py-2 bg-slate-200 text-black truncate'>${e.archived}</td>
			</tr>
			`})};i==null||i.addEventListener("click",t=>{var o,n;const e=(o=t.target.closest("[data-action]"))==null?void 0:o.dataset.action,a=parseInt((n=t.target.closest("[data-note-id"))==null?void 0:n.dataset.noteId);switch(e){case"edit":T(a);break;case"archive":I(a);break;case"delete":q(a);break;case"delete all":w();break;case"archive all":E();break}});D.addEventListener("click",t=>L());m==null||m.addEventListener("click",t=>{$()});const c=document.querySelector(".modal"),y=c.querySelector("form");c.querySelector("[data-submit]");const P=c.querySelector("[data-close]"),U=c.querySelector("[data-reset]"),g=document.querySelector('input[name="name"]'),p=document.querySelector('textarea[name="content"]'),B=document.querySelector('select[name="category"]');let u=null,h=null;c.addEventListener("click",t=>{const e=c.getBoundingClientRect();(t.clientX<e.left||t.clientX>e.right||t.clientY<e.top||t.clientY>e.bottom)&&c.close()});P.addEventListener("click",()=>c.close());U.addEventListener("click",()=>u?F(u):y.reset());const x=(t,e)=>{g.setAttribute("aria-invalid",!t),p.setAttribute("aria-invalid",!e)};y.addEventListener("submit",t=>{t.preventDefault();const e=g.value.length>0,a=p.value.length>10;x(e,a),e&&a&&(h&&h({name:g.value,content:p.value,category:B.value}),c.close(),y.reset(),u=null,h=null)});const F=({name:t,content:e,category:a})=>{g.value=t,p.value=e,B.value=a},z=t=>{x(!0,!0),u&&(y.reset(),u=null),h=t,c.showModal()},V=(t,e)=>{F(t),u!==t&&(x(!0,!0),u=t),h=e,c.showModal()},W=t=>{const e=/\b\d{1,2}\/\d{1,2}\/\d{4}\b/g;return t.match(e)||[]},X=t=>{const e=t.reduce((a,o)=>{const n=o.category;return a[n]||(a[n]={categoryName:n,archived:0,active:0}),o.archived?a[n].archived++:a[n].active++,a},{});return Object.values(e)},d=()=>{const t=r.filter(e=>e.archived===v());Q(t.map(e=>({...e,dates:W(e.content)}))),j(X(r))},Y=t=>{let e=r.find(a=>a.id===t);V(e,a=>{let o={...e,...a};A(o),d()})},K=()=>{z(t=>{var o;let e=new Intl.DateTimeFormat("en-US").format(new Date),a={...t,created:e,archived:!1,id:(((o=r.at(-1))==null?void 0:o.id)||0)+1};M(a),d()})},G=t=>{S(t),d()},J=t=>{H(t),d()},Z=()=>{r.filter(e=>e.archived===v()).forEach(e=>H(e.id)),d()},_=()=>{r.filter(e=>e.archived===v()).forEach(e=>S(e.id)),d()},ee=()=>d();R(K,Y,G,J,_,Z,ee);d();
