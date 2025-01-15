import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { Itodos } from '../../modules/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoArr !:Array<Itodos>

  constructor(
    private _todoService:TodoService
  ){}

  ngOnInit(): void {
    this.todoArr=this._todoService.fetchAllTodos();
    console.log(this.todoArr);
  }

  onRemove(todo:Itodos){
    this._todoService.onRemoveItem(todo)
  }

}
