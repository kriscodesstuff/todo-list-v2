import { format } from "date-fns"

const compareDates = (task) => {

    const taskDateSplit = task.date.toString().split('-');
    const currentDateSplit = format(new Date(), 'yyyy-MM-dd').split('-');

    const getTaskDate = (taskDateSplit) => {
        const taskDay = Number(taskDateSplit[2]);
        const taskMonth = Number(taskDateSplit[1]);
        const taskYear = Number(taskDateSplit[0]);
        return { taskDay, taskMonth, taskYear }
       
    }

    const getCurrentDate = (currentDateSplit) => {
        const currDay = Number(currentDateSplit[2]);
        const currMonth = Number(currentDateSplit[1]);
        const currYear = Number(currentDateSplit[0]);
        return { currDay, currMonth, currYear }
    }

    const taskDate = getTaskDate(taskDateSplit);
    const currentDate = getCurrentDate(currentDateSplit);

    const isToday = (taskDate,currentDate) => {

            return taskDate.taskDay === currentDate.currDay && 
            taskDate.taskMonth === currentDate.currMonth &&
            taskDate.taskYear === currentDate.currYear;

        }
    
    const isUpcoming = (taskDate,currentDate) => {

        return taskDate.taskDay > currentDate.currDay || 
        taskDate.taskMonth > currentDate.currMonth ||
        taskDate.taskYear > currentDate.currYear;

    }
    
    console.log(isToday(taskDate,currentDate))
    if(isToday(taskDate,currentDate)){

        task.dateStatus = 'today';

    }else if(isUpcoming(taskDate,currentDate)){

        task.dateStatus = 'upcoming';

    }else{
        task.dateStatus = 'overdue';
    }
   
    
}

export{ compareDates }