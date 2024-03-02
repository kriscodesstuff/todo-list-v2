
const getTaskInfo = () => {
  const tasksArr = JSON.parse(localStorage.getItem("tasks"));

  return {tasksArr};
}

export { getTaskInfo }
//if localStorage 'tasks' array exists let array = localStorage 'tasks'
//else let array = []
//Push task object into array
// set localStorage tasks as array