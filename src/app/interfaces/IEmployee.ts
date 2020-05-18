import {IRole} from "./IRole";

export interface IEmployee {
  id:number,
  firstName:string,
  lastName:string
  subsidiaryId:number,
  birthday:Date,
  role:IRole,
  salaryHour:number,
  workedHours:number,
  salaryMonth:number
}
