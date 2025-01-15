import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../service/student.service';
import { Istd } from '../../modules/student';

@Component({
  selector: 'app-std-list',
  templateUrl: './std-list.component.html',
  styleUrls: ['./std-list.component.scss']
})
export class StdListComponent implements OnInit {

 stdArr !:Array<Istd>

  constructor(
    private _stdService:StudentService
  ){}

  ngOnInit(): void {
    this.stdArr=this._stdService.fetchAllstd();
  }

  onRemove(std:Istd){
    this._stdService.onRemoveItem(std);
  }

}
