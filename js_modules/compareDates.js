import { format } from "date-fns"

const compareDates = (task) => {

    const taskDate = task.date.toString().split('-');
    const currentDate = format(new Date(), 'yyyy-MM-dd').split('-');

    const taskDay = Number(taskDate[2]);
    const taskMonth = Number(taskDate[1]);
    const taskYear = Number(taskDate[0]);

    const currDay = Number(currentDate[2]);
    const currMonth = Number(currentDate[1]);
    const currYear = Number(currentDate[0]);

    const isToday = () => {
            return taskDay === currDay && taskMonth === currMonth &&
            taskYear === currYear;
        }
    
    const isUpcoming = () => {
        return taskDay > currDay || taskMonth > currMonth ||
        taskYear > currYear;
    }
    

    if(isToday()){
        task.dateStatus = 'today';
    }else if(isUpcoming()){
        task.dateStatus = 'upcoming';
    }else{
        task.dateStatus = 'overdue';
    }
   
    
//format current date and task date so that they're both strings
//split date into array my the / symbol
//save the first array index(the month) in a variable called the month
//save the second array index(the day) in a variable called the day
//do the same thing for the year
// compare 
    
}

export{ compareDates }