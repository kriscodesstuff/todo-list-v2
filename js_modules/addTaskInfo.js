import { getDomElements } from "./getDomElements";

const getDom = getDomElements();
let tasksArr = [];



const addTaskInfo = () => {
    getDom.addTaskModalBtn.addEventListener('click', () => {
        const taskName = document.getElementById('name').value;
        const taskDescription = document.getElementById('description').value
        const task = {name: taskName,
                      description: taskDescription };
        tasksArr.push(task)
        localStorage.setItem("tasks", JSON.stringify(tasksArr));
        
        
        getDom.addTaskModal.classList.add('hidden');
    });
    
}


export { addTaskInfo } 