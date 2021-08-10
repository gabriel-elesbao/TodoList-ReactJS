import {useState} from 'react'

function TodoForm(props){
    const [text, setText] = useState('')

    function handleChange(event){
        let t = event.target.value 

        setText(t)
        
    }


    function addItem(event){
        event.preventDefault()

        if(text){
            props.onAddItem(text)
            setText('')

        }else{
            alert('Adicione um item')
        }
    }

    return(
        <form action="">
            <input 
                onChange={handleChange} 
                type="text" 
                value={text}
                placeholder='Insira uma tarefa' />

            <button onClick={addItem}>Adicionar</button>
        </form>
    )
}

export default TodoForm