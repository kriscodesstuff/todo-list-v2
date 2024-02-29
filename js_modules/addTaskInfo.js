import { getDomElements } from "./getDomElements";

const getDom = getDomElements();

const addTaskInfo = () => {
    const taskName = document.getElementById('name').value;
    const taskDescription = document.getElementById('description').value
    localStorage.setItem("name", taskName);
    localStorage.setItem("description", taskDescription);
    getDom.addTaskModal.classList.add('hidden');
}



getDom.addTaskModalBtn.addEventListener('click',addTaskInfo);