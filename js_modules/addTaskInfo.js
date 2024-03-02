import { getDomElements } from "./getDomElements";
import { displayTasks } from "./displayTasks";

const getDom = getDomElements();




const addTaskInfo = () => {
    getDom.addTaskModalBtn.addEventListener('click', () => {
        const taskName = document.getElementById('name').value;
        const taskDescription = document.getElementById('description').value
        const task = {name: taskName,
            description: taskDescription };
        
        const tasksArr = JSON.parse(localStorage.getItem("tasks")) ?
        JSON.parse(localStorage.getItem("tasks")) : [];

        tasksArr.push(task);

        localStorage.setItem("tasks", JSON.stringify(tasksArr));

        getDom.addTaskModal.classList.add('hidden');

        window.location.reload()
    });
  
}


export { addTaskInfo } 