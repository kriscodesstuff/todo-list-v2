import { getDomElements } from "./getDomElements";

const getDom = getDomElements();

const addTaskInfo = () => {
    getDom.addTaskModalBtn.addEventListener('click', () => {
        const taskName = document.getElementById('name').value;
        const taskDescription = document.getElementById('description').value
        localStorage.setItem("name", taskName);
        localStorage.setItem("description", taskDescription);
        getDom.addTaskModal.classList.add('hidden');
    });
    
}


export { addTaskInfo } 