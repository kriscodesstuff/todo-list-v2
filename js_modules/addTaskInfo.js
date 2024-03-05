import { getDomElements } from "./getDomElements";
import { displayTasks } from "./displayTasks";
import { compareDates } from "./compareDates";

const getDom = getDomElements();



const addTaskInfo = () => {
    getDom.addTaskModalBtn.addEventListener('click', () => {
        const taskName = document.getElementById('name').value;
        const taskDescription = document.getElementById('description').value;
        const taskDate = document.getElementById('date').value;
        const task = {name: taskName,
            description: taskDescription,
            date: taskDate, };

        const tasksArr = JSON.parse(localStorage.getItem("tasks")) ?
        JSON.parse(localStorage.getItem("tasks")) : [];

        compareDates(task,tasksArr);

        tasksArr.push(task);

        localStorage.setItem("tasks", JSON.stringify(tasksArr));

        getDom.addTaskModal.classList.add('hidden');

        window.location.reload()
    });
  
}


export { addTaskInfo } 