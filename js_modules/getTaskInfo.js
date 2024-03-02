
const getTaskInfo = () => {
  const tasksArr = JSON.parse(localStorage.getItem("tasks"));

  return {tasksArr};
}

export { getTaskInfo }
