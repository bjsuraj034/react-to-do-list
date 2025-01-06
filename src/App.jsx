import React, { useEffect } from 'react';
import { useState } from 'react';
import AddTask from './Components/AddTask';
import ToDoList from './Components/ToDoList';

const App = () => {
  // Initialize tasks from localStorage
  const [tasks, setTasks] = useState(() => {
    try {
      const storedTasks = localStorage.getItem('tasks');
      return storedTasks ? JSON.parse(storedTasks) : [];
    } catch (error) {
      console.error('Error parsing tasks from localStorage:', error);
      return [];
    }
  });

  // Save tasks to localStorage whenever the tasks state changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Stringify and save
  }, [tasks]);

  const addTasks = (taskName) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]); // Add new task to state
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId)); // Remove task by ID
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="bg-slate-300 min-h-screen w-full flex flex-col items-center bg-gradient-to-r from-cyan-700 via-blue-500 to-indigo-600">
      <div className="border sm:w-1/2 md:w-1/2 lg:w-1/2 max-sm:px-5   h-[92vh] overflow-auto m-5 py-5">
        <AddTask addTasks={addTasks} />
        <TodoList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      </div>
    </div>
  );
};

export default App;
