import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodos } from '../../modules/todo';
import { GenrateIdService } from '../../service/genrate-id.service';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  constructor(
    private _genrateId:GenrateIdService,
    private _todoService:TodoService
  ) { }

  ngOnInit(): void {
    const todoArr=localStorage.getItem('todoArr');

    if(todoArr){
      this._todoService.todoArr=JSON.parse(todoArr);
    }
  }

  @ViewChild('todoForm') todoForm !:NgForm

  onSubmit(){
    if(this.todoForm.valid){
      let newTodoObj:Itodos={...this.todoForm.value,todoId:this._genrateId.uuid()}
      console.log(newTodoObj);
     
      this._todoService.onCreateTodo(newTodoObj);
      this.todoForm.reset();
    }
    
  }

}
