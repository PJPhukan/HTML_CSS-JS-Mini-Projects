import React from 'react'
import { MdEditSquare } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
const Todo = (props) => {
    const { item, handleCheckbox, HandleEdit, HandleDelete } = props


    return (
        <div className='flex gap-4 bg-violet-300 rounded-xl p-4 my-4 mx-2 justify-between border-solid border-2 border-indigo-400 w-1/2' id={item.id}>
            <div className="flex gap-5">
                <input type="checkbox" checked={item.isCompleted} onChange={handleCheckbox} name={item.id} />
                <div className={`text font-bold font-sans text-xl ${item.isCompleted === false ? "" : "line-through"}`}>{item.todo}</div>
            </div>
            <div className="button">
                <button className='bg-violet-700 font-bold p-2 py-1 mx-1 text-white rounded-md cursor-pointer' onClick={(e) => HandleEdit( item.id)}><MdEditSquare /></button>
                <button className='bg-violet-700 font-bold p-2 py-1 mx-1 text-white rounded-md cursor-pointer' onClick={(e) => HandleDelete( item.id)}><RiDeleteBin6Fill /></button>
            </div>
        </div>
    )
}

export default Todo
