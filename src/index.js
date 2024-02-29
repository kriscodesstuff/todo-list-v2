import { allTasks } from "../js_modules/allTasks";
import { openTaskModal } from "../js_modules/openTaskModal";
import { addTaskInfo } from "../js_modules/addTaskInfo";
import { switchTabs } from "../js_modules/switchTabs";



const loadDefaultPage = (function() {
    let loadHomePage = true;

    if(loadHomePage){
    allTasks();
    }
})()


switchTabs()
openTaskModal();
addTaskInfo();





