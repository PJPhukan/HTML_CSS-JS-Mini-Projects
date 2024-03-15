import React, { useEffect, useState } from 'react'
import Todo from './Todo'
import { v4 as uuidv4 } from 'uuid';
const Home = () => {
    const [todo, setTodo] = useState("")
    const [Todos, setTodos] = useState([])
    const [showFinished, setshowFinished] = useState(true);


    useEffect(() => {
      
        let todoString = localStorage.getItem("Todos")
        if (todoString) {
            let Todos = JSON.parse(localStorage.getItem("Todos"))
            setTodos(Todos)
        }
    }, [])

    const LocalStorageSave = () => {
        localStorage.setItem("Todos", JSON.stringify(Todos))
    };


    const HandleAdd = () => {
        if (todo !== "") {
            setTodos([...Todos, { id: uuidv4(), todo, isCompleted: false }])
            setTodo("");
            LocalStorageSave();
        }
    }

    const onchange = (e) => {
        setTodo(e.target.value)
    }

    const handleCheckbox = (e) => {
        // let id = e.target.id;
        let id = e.target.name;
        const index = Todos.findIndex(item => {
            return item.id === id;
        })
        let newTodos = [...Todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
         setTodos(newTodos)
        LocalStorageSave();
    }

    const HandleDelete = (id) => {
        let newTodos = Todos.filter(item => {
            return item.id !== id
        });
        setTodos(newTodos)
        LocalStorageSave();
    }

    const HandleEdit = (id) => {
        let t = Todos.filter(i => i.id === id)
        setTodo(t[0].todo)
        let newTodos = Todos.filter(item => {
            return item.id !== id
        });
        setTodos(newTodos)
        LocalStorageSave();
    }

    const ToggleFinished = () => {
        setshowFinished(!showFinished);
    }

    return (
        <div className="container mx-auto bg-violet-200 my-5 rounded-xl p-5 min-h-[80vh]">
            <div className="add-todo my-2">
                <h1 className='text-2xl font-bold font-sans' >Add Todo</h1>
                <input type="text" className='p-1 rounded-lg outline-none w-80 px-4' value={todo} onChange={onchange} />
                <button className='bg-violet-700 font-bold px-6 py-1 text-white rounded-md m-6 cursor-pointer' onClick={HandleAdd}>Add</button>

            </div>
            <input type="checkbox" checked={showFinished} onChange={ToggleFinished} id='show' />
            <label htmlFor="show">Show Finished</label> 
            <h1 className='text-2xl font-bold font-sans my-4'>Your Todos</h1>

            <div className="todos">
                {Todos.length === 0 && <h2>No Todo available</h2>}

                {Todos.map(item => {
                    return ( showFinished || !item.isCompleted ) && <Todo key={item.id} item={item} handleCheckbox={handleCheckbox} HandleDelete={HandleDelete} HandleEdit={HandleEdit} />
                })}

            </div>
        </div>
    )
}

export default Home
