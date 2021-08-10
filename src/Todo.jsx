import { useState } from 'react'
import './Todo.css'

import List from './List'

function Todo(){
    const [text, setText] = useState('')
    const [items, setItems] = useState([])

    function handleChange(event){
        let t = event.target.value 
        setText(t)
        

    }

    function addItem(event){
        event.preventDefault()
        if(text){
        setItems([...items,text])
        setText('')
        }else{
            alert('Adicione um item')
        }
    }
    
    return(
        
        <div className="container">
                <h1>Todo list</h1>
                <form action="">
                    <input 
                        onChange={handleChange} 
                        type="text" 
                        value={text}
                        placeholder='Insira uma tarefa' />
                    <button onClick={addItem}>Adicionar</button>
                </form>

                    <List items={items}></List>
                
           
        </div>
    
    )
}



export default Todo