
import './App.css'
import Greeting from './Greeting'
import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
const [todos, setTodos] = useState([])

useEffect(() => {
  fetch('http://localhost:3000/todos')
    .then(res => res.json())
    .then(data => setTodos(data))
}, [])

  const skills = ['HTML', 'CSS', 'JavaScript', 'React']
  return (
    <div>
      <Greeting name="Yurii" />
      <h1>Hi! It's my React app</h1>
      <h2>My Todos (from server)</h2>
<ul>
  {todos.map((todo) => (
    <li key={todo.id}>{todo.task}</li>
  ))}
</ul>
      <p>I'm learning fullstack development.</p>

      <button onClick={() => setCount(count + 1)}>
        Count is {count}
      </button>
      <ul>
  {skills.map((skill) => (
    <li key={skill}>{skill}</li>
  ))}
</ul>
    </div>
  )
}

export default App