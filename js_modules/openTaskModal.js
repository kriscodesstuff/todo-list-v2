import { getDomElements } from "./getDomElements";

const getDom = getDomElements();

const openTaskModal = () => {
    getDom.addTaskModal.classList.remove('hidden');
}

getDom.addTaskBtn.addEventListener('click', openTaskModal);
