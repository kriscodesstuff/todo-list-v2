import { allTasks } from "../js_modules/allTasks";
import { today } from "../js_modules/today";
import { upcoming } from "../js_modules/upcoming";
import { getDomElements } from "../js_modules/getDomElements";
import { openTaskModal } from "../js_modules/openTaskModal";
import { addTaskInfo } from "../js_modules/addTaskInfo";

const getDom = getDomElements();
openTaskModal();
addTaskInfo();

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




