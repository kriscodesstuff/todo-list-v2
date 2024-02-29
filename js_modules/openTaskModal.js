import { getDomElements } from "./getDomElements";

const getDom = getDomElements();

const openTaskModal = () => {
    getDom.addTaskBtn.addEventListener('click', () => {
        getDom.addTaskModal.classList.remove('hidden');
    });
    
}

export { openTaskModal }
