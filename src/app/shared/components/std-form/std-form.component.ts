import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GenrateIdService } from '../../service/genrate-id.service';
import { StudentService } from '../../service/student.service';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {

  constructor(
    private _genrateId:GenrateIdService,
    private _stdService:StudentService
  ){}

  ngOnInit(): void {
    const stdArr=localStorage.getItem('stdArr');

    if(stdArr){
      this._stdService.stdArr=JSON.parse(stdArr);
    }
  }
 

  @ViewChild('stdForm') stdForm !:NgForm
  @ViewChild('contact')  contact !:any
  onSubmit(){
    if(this.stdForm.valid){
      let newStdObj={...this.stdForm.value, contact:+(this.contact.value), stdId:this._genrateId.uuid()}

      console.log(newStdObj);

     this._stdService.onCreateStd(newStdObj);

     this.stdForm.reset()
     
     
    }
  }

}
