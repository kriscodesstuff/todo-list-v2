import { getTaskInfo } from "./getTaskInfo";
import { displayTasks } from "./displayTasks";

const allTasks = () => {
    const content = document.querySelector('#content');
    const h1 = document.createElement('h1');
    content.appendChild(h1);
    h1.innerText = 'All Tasks';
    displayTasks(content);

}


export { allTasks };