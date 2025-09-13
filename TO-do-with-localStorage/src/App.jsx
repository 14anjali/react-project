import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './context/TodoContext'
import { TodoForm } from './components'
import TodoItem from './components/TodoItem'

function App() {
  const [todos,setTodos]=useState([])
  const addTodo =(Todo)=>{
    setTodos((prev)=>[...prev,{id:Date.now(),...Todo}])
  }
  const updateTodo=(id,Todo)=>{
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id?Todo:prevTodo)))
  }
  const deleteTodo =(id)=>{
    setTodos((prev)=>prev.filter((Todo)=>Todo.id!==id))
  }
const toggleComplete=(id)=>{
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id?{...prevTodo,completed: !prevTodo.completed}:prevTodo))
}
useEffect(()=>{
  const todos=  JSON.parse(localStorage.getItem("todos"))
  if(todos && todos.length>0){
    setTodos(todos)
  }
},[])

useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
},[todos])
  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                      {todos.map((Todo)=>(
                        <div key={Todo.id}
                        className='w-full'
                        >
                    <TodoItem todo={Todo}/>
                        </div>
                      ))}

                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
