const getDomElements = () => {
    const todayTab = document.querySelector('#today-tab');
    const allTasksTab = document.querySelector('#all-tasks-tab');
    const upcomingTab = document.querySelector('#upcoming-tab');
    const content = document.querySelector('#content');
    const addTaskBtn = document.querySelector('#add-task');
    const addTaskModal = document.querySelector('.add-task-modal');
    const addTaskModalBtn = document.querySelector('#add-task-modal-button');

    return { todayTab, allTasksTab, upcomingTab, content,
         addTaskBtn, addTaskModal, addTaskModalBtn}
}

export { getDomElements }