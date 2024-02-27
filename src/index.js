import { allTasks } from "../js_modules/allTasks";
import { today } from "../js_modules/today";
import { upcoming } from "../js_modules/upcoming";

const todayTab = document.querySelector('#today-tab');
const allTasksTab = document.querySelector('#all-tasks-tab');
const upcomingTab = document.querySelector('#upcoming-tab');
const content = document.querySelector('#content');
const addTaskBtn = document.querySelector('#add-task');
const addTaskModal = document.querySelector('.add-task-modal');

const loadDefaultPage = (function() {
    let loadHomePage = true;

    if(loadHomePage){
    allTasks();
    }
})()



const switchTabs =  ( function() {

    const clearPage = () => {
        while(content.hasChildNodes()){
            content.removeChild(content.firstChild);
        }   
    }

    todayTab.addEventListener('click', () => {
        clearPage()
        today();
    })


    allTasksTab.addEventListener('click', () => {
        clearPage();
        allTasks();
    });

    upcomingTab.addEventListener('click', () => {
        clearPage();
        upcoming();
    })


})()


const addTask = () => {
    addTaskModal.classList.remove('hidden');
}


addTaskBtn.addEventListener('click', addTask);