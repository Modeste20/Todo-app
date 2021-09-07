import React,{useEffect} from 'react';


const Form =({value,setValue,todos,setTodos,statut,setStatut,id,setId}) =>{


    function handleChange (e) {
       setValue(e.target.value);
    }

    function onSelectHandler (e){
        const val=e.target.value;
        setStatut(val);
    }

    function handleSubmit (e){
        e.preventDefault();
        if(value){
          if(id){
            const todos = JSON.parse(sessionStorage.getItem('todos'))
            const newTodo = todos.map(todo => {
              if(todo && todo.id.toString() === id){
                return {
                  ...todo,
                  text:value
                }
              } else {
                return todo
              }
            })
            sessionStorage.setItem('todos',JSON.stringify(newTodo))
            setTodos(newTodo)
          } else{
            setTodos( c =>{
              let table;
              if(!c || !c.length){
                table = [
                  {
                      text:value,
                      completed:false,
                      id:Math.random()*10000000000000,
                  }
              ]
                sessionStorage.setItem('todos',JSON.stringify(table))
                return table;
              }

              table = [
                ...todos,
                {
                    text:value,
                    completed:false,
                    id:Math.random()*10000000000000,
                }
            ];
            sessionStorage.setItem('todos',JSON.stringify(table))
            return table
          })
          }

        setValue('');
        setId('')
        document.getElementById('tape').focus();
    }
    document.getElementById('tape').focus();
    }
    return (
        <form onSubmit={handleSubmit} action="" id='form'>
        <div className='input'>
            <input type="text" id='tape' value={value} onChange={handleChange}/>
            <button type='submit' className='input-button'>
                <i className='fa fa-plus'></i>
            </button>
        </div>
            <div className="select">
                <select name="" id="select" value={statut} onChange={onSelectHandler}>
                    <option value="All">Tout</option>
                    <option value="completed">Afficher seulement les tâches terminées</option>
                    <option value="uncompleted">Afficher seulement les tâches non terminées</option>
                </select>
            </div>
        </form>
    )
}

export default Form;
