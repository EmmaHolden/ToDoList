'use client' 

import { useState } from 'react'
import Form from '@/components/Form'
import Counter from '@/components/Counter'
import Goal from '@/components/Goal'
import './App.css';

const App = () => {
  const [input, setInput] = useState('')
  const [items, setItems] = useState([])
  const [complete, setComplete] = useState(0)
  const [goal, setGoal] = useState(0)

  const handleSubmit = (e) => { 
    e.preventDefault()
    let newItems = [...items] 
    newItems.push(input) 
    setItems(newItems) 
    setInput('') 
  }

  const deleteItem = (index) => {
    let newItems = [...items]
    newItems.splice(index, 1)
    setItems(newItems)
  }

  const completeItem = (event) => {
    if (event.target.style.textDecoration) {
      event.target.style.removeProperty('text-decoration'); 
      if (complete > 0) {
        let newComplete = complete
        newComplete -= 1
        setComplete(newComplete)
        }
    } else {
        let newComplete = complete
        newComplete += 1
        setComplete(newComplete)
        event.target.style.setProperty('text-decoration', 'line-through')
    }
    
  }

  const deleteAll = () => {
    setItems([])
  }
  
  return (
    <div>
      <div>
        <h1>To-do List</h1>
      </div>
      <div>
        <Form handleSubmit = {handleSubmit} input = {input} setInput = {setInput}/>
      </div>
      <div>
        <p className = "instructions">(Click on an item to cross it off your list without deleting it. Click again to undo this.)</p>
      </div>
      <div className = "container">
        <div>
          <ul>
            {items.map((item, index) => {
              return (
                <div className = "listAndButton">
                  <li id= "listItem" onClick = { (event) => completeItem (event)}>{item}</li>
                  <button id = "delete" onClick = {() => deleteItem(index)}>X</button>
                </div>
              )})}
          </ul>
        </div>
        <div className = "container1" id="goal">
          <Goal goal = {goal} setGoal = {setGoal}/>
        </div>
      </div>
      <div className = "container1">
        <button id = "deleteAll" onClick = {() => deleteAll()}>Delete All</button>
      </div>
      <div>
        <Counter items = {items} goal = {goal} complete = {complete} setComplete = {setComplete}/>
      </div>     
    </div>
  )
}
export default App