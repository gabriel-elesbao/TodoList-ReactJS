import { useState } from 'react'
import './Todo.css'

import Item from './Item'

import List from './List'
import TodoForm from './TodoForm'

function Todo(){
    
    const [items, setItems] = useState([])

    function onAddItem(text){
        let it = new Item (text)
        setItems([...items, it])
    }

    
    return(
        
        <div className="container">
                <h1>Todo list</h1>
                
                    <TodoForm onAddItem={onAddItem} ></TodoForm>
                    <List items={items}></List>
                
           
        </div>
    
    )
}






export default Todo