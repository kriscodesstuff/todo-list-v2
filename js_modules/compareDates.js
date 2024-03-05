import { format } from "date-fns"

const compareDates = (task,tasksArr) => {
    const currentDate = format(new Date(), 'yyyy/MM/dd');

    tasksArr.forEach(obj => {
       const taskDate = format(obj.date, 'yyyy/MM/dd');
       if(taskDate == currentDate){
        obj.dateStatus = 'today';
       }else if(taskDate > currentDate){
        obj.dateStatus = 'upcoming';
       }else if(taskDate < currentDate){
        obj.dateStatus = 'overdue';
       }
    });
}

export{ compareDates }