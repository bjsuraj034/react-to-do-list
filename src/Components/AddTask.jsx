import React, { useState } from 'react'
import { use } from 'react'

const AddTask = ({addTasks}) => {
    const [taskName, settaskName] = useState('');
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(taskName.trim()==='')
        {
            alert('Task name cannot be empty')
            return;
        }
        addTasks(taskName)
        settaskName("")

    }
  return (
    <div className=' '>
        <div className='flex flex-col gap-3 items-center'>
            <h1 className='text-center text-4xl  max-sm:text-2xl font-light text-white  '>To do <span className='text-yellow-400 font-semibold'>List</span></h1>
            <form  onSubmit={handleSubmit}>
                <input value={taskName} onChange={(e)=>settaskName(e.target.value)} type="text" className='outline-none placeholder:text-sm text-center px-1 py-1 rounded-lg max-sm:w-full ' placeholder='enter the task' />
                <button type='submit' className='px-2 py-2 bg-green-700 rounded-md  ml-3 max-sm:mt-5 max-sm:ml-1  text-sm text-white'>Add Task</button>
            </form>


        </div>
      
    </div>
  )
}

export default AddTask
