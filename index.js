// Your code here
function createEmployeeRecord(array){
    let user = {
        firstName : array [0],
        familyName : array[1],
        title : array[2],
        payPerHour : array[3],
        timeInEvents : [],
        timeOutEvents : [],
    };
    return user;
}
function createEmployeeRecords(arrays){
    let newArray = [];
    for (let array of arrays){
        newArray.push(createEmployeeRecord(array));
    }
    return newArray;
}
function createTimeInEvent(employee,datestamp){
    let [date,time] = datestamp.split(" ")
    let timein = {
        type: 'TimeIn',
        hour: Number(time),
        date: date
    }
    employee.timeInEvents.push(timein)
    return employee;
}
function createTimeOutEvent(employee,datestamp){
    let [date,time] = datestamp.split(" ")
    let timeout = {
        type: 'TimeOut',
        hour: Number(time),
        date: date
    }
    employee.timeOutEvents.push(timeout)
    return employee;
}
function hoursWorkedOnDate(employee,datestamp){
    let [date,time] = datestamp.split(" ")
    

    let timeInHour ;
    let timeOutHour;
    for (const specificDate of employee.timeInEvents){
        if(date === specificDate.date){
            timeInHour = specificDate.hour     
        }
    }
    for (const specificDate of employee.timeOutEvents){
        if(date === specificDate.date){
            timeOutHour = specificDate.hour     
        }
    }
    let sum = timeOutHour - timeInHour;
    sum = sum/100
    return sum;
}
function wagesEarnedOnDate(employee,datestamp){
    let hours = hoursWorkedOnDate(employee,datestamp);
    let payRate = employee.payPerHour
    return hours * payRate;
}
function allWagesFor(employee){
    let allWages = 0;
    for (const dates of employee.timeInEvents){
      allWages += wagesEarnedOnDate(employee,dates.date)
    }
    return allWages
}
function calculatePayroll(employees){
    let payroll = 0;
    for (const employee of employees){
        payroll += allWagesFor(employee)
    }
    return payroll
}



  
