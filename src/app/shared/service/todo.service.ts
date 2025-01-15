import { Injectable } from '@angular/core';
import { Itodos } from '../modules/todo';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private _snackBar:SnackbarService
  ){}

  todoArr:Array<Itodos>=[
    {
      todoItem:'js',
      todoId:'120',
    },
    {
      todoItem:'ts',
      todoId:'121',
    },
    {
      todoItem:'Angular',
      todoId:'122',
    },
    {
      todoItem:'Node',
      todoId:'123',
    },
  ]

  fetchAllTodos():Array<Itodos>{
    return this.todoArr
  }

  onCreateTodo(todo:Itodos){
    this.todoArr.push(todo);

    this._snackBar.openSnackBar(`the todoItem is ${todo.todoItem} added successfully in todolist`)
    
    localStorage.setItem('todoArr',JSON.stringify(this.todoArr))

  }

  onRemoveItem(todo:Itodos){

    let confirmed=confirm();
    if(confirmed){
      let removeItem=this.todoArr.findIndex(todoObj=>todoObj.todoId===todo.todoId);

    console.log(removeItem);

    this.todoArr.splice(removeItem,1);

    localStorage.setItem('todoArr',JSON.stringify(this.todoArr))

    this._snackBar.openSnackBar(`the todoItem is ${todo.todoItem} removed is successfully in todoItem`)
    }
    
  }
}
