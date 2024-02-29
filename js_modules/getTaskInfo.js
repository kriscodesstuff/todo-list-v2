

const getTaskInfo = () => {

  const getTaskName = localStorage.getItem("name");
  const getTaskDescription = localStorage.getItem("description");

  return {getTaskName, getTaskDescription};
}

export { getTaskInfo }