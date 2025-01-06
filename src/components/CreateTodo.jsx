import React, { useCallback, useState } from 'react'

const CreateTodo = () => {
  const [value,setValue]=useState("");

  const handleChangeValue =useCallback((e)=>{
    setValue(e.target.value)
  },[])

  console.log("CreateTodo");

  return (
    <div className="w-10 m-auto mt-4 flex justify-center gap-3">
        <input type="text" className="form-control border-2 border-black rounded px-2 py-1" placeholder="Add a new task..." onChange={handleChangeValue} />
        <button type="submit" className="btn btn-primary mt-2  bg-green-800 text-white ">
          Add
        </button>
    </div>
  )
}

export default CreateTodo