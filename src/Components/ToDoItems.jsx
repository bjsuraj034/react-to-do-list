import React from 'react';

const ToDoItems = ({ tasks, deleteTask, toggleTaskCompletion }) => {
  return (
    <div className='flex w-full justify-evenly items-center'>
      <li className={tasks.completed ? 'completed' : ''}>

        <span className='cursor-pointer text-xl leading-tight text-white flex gap-4' onClick={() => toggleTaskCompletion(tasks.id)}>
        <h1> {tasks.name}</h1>
        {tasks.completed ? '✅' : '❌'} 
        </span>
      </li>
      <button className='bg-red-500 px-4 py-1 text-white rounded-md text-sm' onClick={() => deleteTask(tasks.id)}>Delete</button>
    </div>
  );
};

export default ToDoItems;
