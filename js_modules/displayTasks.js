import { getTaskInfo } from "./getTaskInfo"

const getTask = getTaskInfo().tasksArr

const displayTasks = (parent) => {
   getTask.forEach(obj => {
        const task = document.createElement('div');
        const name = document.createElement('p');
        const description = document.createElement('p');

        task.classList.add('task');
        name.classList.add('name');
        description.classList.add('description');

        name.innerText = obj.name;
        description.innerText = obj.description;

        parent.appendChild(task);
        task.appendChild(name);
        task.appendChild(description);
   });
}

export { displayTasks }