(()=>{"use strict";const e=()=>({todayTab:document.querySelector("#today-tab"),allTasksTab:document.querySelector("#all-tasks-tab"),upcomingTab:document.querySelector("#upcoming-tab"),content:document.querySelector("#content"),addTaskBtn:document.querySelector("#add-task"),addTaskModal:document.querySelector(".add-task-modal"),addTaskModalBtn:document.querySelector("#add-task-modal-button")}),t=e(),a=JSON.parse(localStorage.getItem("tasks")),n=e(),d=()=>{const e=document.querySelector("#content"),t=document.createElement("h1");e.appendChild(t),t.innerText="All Tasks",(e=>{if(a)a.forEach((t=>{const a=document.createElement("div"),n=document.createElement("p"),d=document.createElement("p");a.classList.add("task"),n.classList.add("name"),d.classList.add("description"),n.innerText=t.name,d.innerText=t.description,e.appendChild(a),a.appendChild(n),a.appendChild(d)}));else{const t=document.createElement("p");t.classList.add("no-tasks"),t.innerText="No tasks added",e.appendChild(t)}})(e)},s=e();d(),(()=>{const e=()=>{for(;content.hasChildNodes();)content.removeChild(content.firstChild)};s.todayTab.addEventListener("click",(()=>{e(),(()=>{const e=document.querySelector("#content"),t=document.createElement("h1");t.innerText="Today's Tasks",e.appendChild(t)})()})),s.allTasksTab.addEventListener("click",(()=>{e(),d()})),s.upcomingTab.addEventListener("click",(()=>{e(),(()=>{const e=document.querySelector("#content"),t=document.createElement("h1");t.innerText="Upcoming Tasks",e.appendChild(t)})()}))})(),t.addTaskBtn.addEventListener("click",(()=>{t.addTaskModal.classList.remove("hidden")})),n.addTaskModalBtn.addEventListener("click",(()=>{const e={name:document.getElementById("name").value,description:document.getElementById("description").value};if(JSON.parse(localStorage.getItem("tasks"))){const t=JSON.parse(localStorage.getItem("tasks"));t.push(e),localStorage.setItem("tasks",JSON.stringify(t))}else{const t=[];t.push(e),localStorage.setItem("tasks",JSON.stringify(t))}n.addTaskModal.classList.add("hidden"),window.location.reload()}))})();