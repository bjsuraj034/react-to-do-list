import React from 'react'
import ToDoItems from './ToDoItems'

const TodoList = ({tasks,deleteTask,toggleTaskCompletion}) => {
  return (
    <ul className='flex items-center flex-col mt-8 gap-3'>
        {tasks.map((tasks)=>{
            return <ToDoItems key={tasks.id} tasks={tasks} deleteTask={deleteTask} toggleTaskCompletion={toggleTaskCompletion}/>
        })}
    </ul>
  )
}

export default TodoList
