import { allTasks } from "../js_modules/allTasks";
import { today } from "../js_modules/today";

const todayTab = document.querySelector('#today-tab');


let loadHomePage = true;

if(loadHomePage){
    allTasks();
}

