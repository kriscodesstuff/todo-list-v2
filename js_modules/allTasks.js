import { getTaskInfo } from "./getTaskInfo";

const allTasks = () => {
    const getTask = getTaskInfo();
    const content = document.querySelector('#content');
    const h1 = document.createElement('h1');
    const taskDiv = document.createElement('div');
    const taskName = document.createElement('h3');
    const taskDescription = document.createElement('p');
    // const p = document.createElement('p');

    h1.innerText = 'All Tasks';
    taskName.innerText = getTask.getTaskName;
    taskDescription.innerText = getTask.getTaskDescription;
    
    taskDiv.classList.add('task');
    // p.innerText = 'No tasks added';

    content.appendChild(h1);
    content.appendChild(taskDiv);
    taskDiv.appendChild(taskName);
    taskDiv.appendChild(taskDescription);
    // content.appendChild(p);

    

}


export { allTasks };