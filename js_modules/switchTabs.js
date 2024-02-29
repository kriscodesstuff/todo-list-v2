import { getDomElements } from "./getDomElements";
import { today } from "../js_modules/today";
import { upcoming } from "../js_modules/upcoming";
import { allTasks } from "../js_modules/allTasks";

const getDom = getDomElements();


const loadDefaultPage = (function() {
    let loadHomePage = true;

    if(loadHomePage){
    allTasks();
    }
})() 
    

const switchTabs = () => {

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
}

export { switchTabs };