import { format } from "date-fns"

const compareDates = (task) => {
    const currentDate = format(new Date(), 'yyyy/MM/dd');

    
    const taskDate = format(task.date, 'yyyy/MM/dd');
    if(taskDate == currentDate){
    task.dateStatus = 'today';
    }else if(taskDate > currentDate){
    task.dateStatus = 'upcoming';
    }else if(taskDate < currentDate){
    task.dateStatus = 'overdue';
     }
    

    
}

export{ compareDates }