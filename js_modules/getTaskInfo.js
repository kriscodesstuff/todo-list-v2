
const getTaskInfo = () => {
  const tasksArr = JSON.parse(localStorage.getItem("tasks"));

  return {tasksArr};
}

export { getTaskInfo }
//If array doesnt exist create an empty array and push task to it
//Else if array does exist just push task to the existing array