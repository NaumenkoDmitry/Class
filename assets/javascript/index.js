'use strict';
class Worker{
  constructor(name,lastName,daysWork,salary,premium){
    
    if(isNaN(daysWork) || typeof daysWork !== 'number'){
      throw new TypeError('Days work must be number');
    }
    if(daysWork <0){
      throw new RangeError('Days work can`t be minus')
    }
    if(isNaN(salary) || typeof salary !== 'number'){
      throw new TypeError('Salary work must be number');
    }
    if(salary <0){
      throw new RangeError('Salary can`t be minus')
    }
    this.name = name;
    this.lastName = lastName;
    this.daysWork = daysWork;
    this.salary = salary;
    this.premium = premium;
  }

  getFullName(){
    return `${this.name} ${this.lastName}`;
  }
  getSalary(){
    if(this.premium){
      return this.salary * this.daysWork * 1.25;
    }
    return this.salary * this.daysWork;
  }
 
}


const worker1 = new Worker('Test','Testovich',44,500,true);
const worker2 = new Worker('Dasha','Testovna',22,500,false);
