import { Injectable } from '@angular/core';
import { Istd } from '../modules/student';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private _snackbar:SnackbarService
  ){}


  stdArr:Array<Istd>=[
    {
      fname:'jhon',
      lname:'doe',
      email:'jd@gmail.com',
      contact:1234567890,
      stdId:'120'
    },
    {
      fname:'jhon',
      lname:'doe',
      email:'jd@gmail.com',
      contact:1234567890,
      stdId:'121'
    },
  ]


  fetchAllstd():Array<Istd>{
    return this.stdArr
  }

  onCreateStd(std:Istd){
    this.stdArr.push(std);

    localStorage.setItem('stdArr',JSON.stringify(this.stdArr));
    this._snackbar.openSnackBar(`in student list ${std.fname}  ${std.lname} student info is not available`)
  }

  onRemoveItem(std:Istd){
    let confirmed=confirm();
    if(confirmed){
      let removeItem=this.stdArr.findIndex(stdObj=> stdObj.stdId==std.stdId);

    this.stdArr.splice(removeItem,1)

    localStorage.setItem('stdArr',JSON.stringify(this.stdArr));

    this._snackbar.openSnackBar(`in student table ${std.fname}  ${std.lname} student info in Removed successfully !!`)
    }
  }
}
