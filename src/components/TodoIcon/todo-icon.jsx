import React from 'react';
import './todo-icon';


const TodoIcon=({editTodo,deleteTodo,todoIsDone}) =>{
    return (
        <div className="todo-icon">
            <div className="fa fa-pencil-alt" onClick={editTodo}></div>
            <div className="fa fa-check" onClick={todoIsDone}></div>
            <div className="fa fa-trash" onClick={deleteTodo}></div>
        </div>
    )
}

export default TodoIcon;
