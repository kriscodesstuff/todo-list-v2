import { allTasks } from "../js_modules/allTasks";
import { today } from "../js_modules/today";
import { upcoming } from "../js_modules/upcoming";
import { getDomElements } from "../js_modules/getDomElements";

const getDom = getDomElements();

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

    getDom.todayTab.addEventListener('click', () => {
        clearPage()
        today();
    })

    getDom.allTasksTab.addEventListener('click', () => {
        clearPage();
        allTasks();
    });

    getDom.upcomingTab.addEventListener('click', () => {
        clearPage();
        upcoming();
    })
})()



const addTaskInfo = () => {
    const taskName = document.getElementById('name').value;
    const taskDescription = document.getElementById('description').value
    localStorage.setItem("name", taskName);
    localStorage.setItem("description", taskDescription);
    getDom.addTaskModal.classList.add('hidden');
}



getDom.addTaskModalBtn.addEventListener('click',addTaskInfo);
