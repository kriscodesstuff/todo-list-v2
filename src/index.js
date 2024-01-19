import { allTasks } from "../js_modules/allTasks";
import { today } from "../js_modules/today";

const todayTab = document.querySelector('#today-tab');
const allTasksTab = document.querySelector('#all-tasks-tab');
const content = document.querySelector('#content');

let loadHomePage = true;

if(loadHomePage){
    allTasks();
}

todayTab.addEventListener('click', () => {
        while(content.hasChildNodes()){
            content.removeChild(content.firstChild);
        }
    
    today();
})

allTasksTab.addEventListener('click', () => {
    while(content.hasChildNodes()){
        content.removeChild(content.firstChild);
    }
    allTasks();
})

