import React,{useState , useEffect} from 'react';
import './App.css';

// Components import
import Form from './components/form.jsx';
import FormList from './components/formList';

//Main components

function App() {

  const [value,setValue]=useState('');
  const [todos,setTodos]=useState([]);
  const [statut,setStatut]=useState('All');
  const [id,setId]=useState('');

  useEffect(()=>{
    const todos = JSON.parse(sessionStorage.getItem('todos'))
    console.log(todos)
    setTodos(todos)
  },[])

  return (
    <div className="App">
       <h1>Mon Application todolist</h1>
       <Form
       value={value}
       todos={todos}
       setTodos={setTodos}
       setValue={setValue}
       setStatut={setStatut}
       statut={statut}
       id={id}
       setId={setId}
       />
       <FormList todos={todos} setId={setId} setValue={setValue} setTodos={setTodos} statut={statut}/>
    </div>
  );
}

export default App;
