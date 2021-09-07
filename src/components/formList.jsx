import React from 'react';
import TodoIcon from './TodoIcon/todo-icon';


function FormList({setTodos,todos,statut,setValue,setId}){

    function todoIsDone (key){
      const todos = JSON.parse(sessionStorage.getItem('todos'))
      const newTodos =todos.length && todos.map(c => {
        if(c){
          if(c.id === key){
            return {
              ...c,completed:!c.completed
            }
          } else{
            return c
          }
        }
      })
      sessionStorage.setItem('todos',JSON.stringify(newTodos))
      setTodos(newTodos)
    }

    function deleteTodo (key){
      const todo = JSON.parse(sessionStorage.getItem('todos'))
         const filtre=todo.filter(todoo =>{
             return todoo && todoo.id !== key;
         })
         sessionStorage.setItem('todos',JSON.stringify(filtre))
         setTodos(filtre);
    }

    const row = []

  todos && todos.length &&  todos.forEach((c, i) => {
    if(c){
      if(statut === 'completed' && !c.completed){
        return;
      }
      if(statut === 'uncompleted' && c.completed){
        return ;
      } else{
         row.push(c)
      }
    }
    });



    const editTodo = (key) => {
      const todo = JSON.parse(sessionStorage.getItem('todos'));
      const currentTodo = todo.filter(c =>c &&  c.id === key)[0]
      setValue(currentTodo.text)
      setId(key.toString())
    }


    return (
        <div className="todo-container">
                {
                    row.length ? row.map( (todo) =>{

                        return (
                        <div className={`todo-list ${todo && todo.completed ? 'completed': ''}`} key={todo && todo.id}>
                        <div className="todo">
                            {todo && todo.text}
                        </div>
                            <TodoIcon editTodo={() => editTodo(todo && todo.id)} todoIsDone={() => todoIsDone(todo && todo.id)} deleteTodo={() => deleteTodo(todo && todo.id)}/>
                        </div>
                        );
                    }) :
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'50vh'}}>
                      Veuillez ajouter des tâches
                    </div>
                }
        </div>
    )
}
export default FormList;
