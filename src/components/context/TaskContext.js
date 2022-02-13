import { v4 as uuid4 } from 'uuid';
import { createContext, useState, useEffect } from 'react';
const TaskContext = createContext();
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(
    !localStorage.getItem('tasks')
      ? localStorage.setItem('tasks', JSON.stringify([]))
      : []
  );
  const [doneTaskList, setDoneTask] = useState([]);
  const [PopUp, setPopUp] = useState({ in: false, item: null });
  const addTasks = (topic, content) => {
    const oldTask = JSON.parse(localStorage.getItem('tasks'));
    const newTask = {
      id: uuid4(),
      isDone: false,
      topic,
      content,
    };
    localStorage.setItem('tasks', JSON.stringify([newTask, ...oldTask]));
    setTasks([newTask, ...tasks]);
  };
  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem('tasks')));
  }, []);
  useEffect(() => {
    const alldoneTask = tasks.filter((task) => task.isDone === true);
    setDoneTask(alldoneTask);
  }, [tasks]);
  const deleteTask = (id) => {
    const newTask = tasks.filter((task) => task.id !== id);
    setTasks(newTask);
    localStorage.setItem('tasks', JSON.stringify(newTask));
  };
  const deleteAll = ()=>{
    setTasks([]);
  }
  const doneTask = (id) => {
    const newTask = [...tasks];
    const index = newTask.findIndex((task) => task.id === id);
    newTask[index].isDone = !newTask[index].isDone;
    setTasks(newTask);
    localStorage.setItem('tasks', JSON.stringify(newTask));
  };
  const setId = (id) => {
    const index = tasks.findIndex((task) => task.id === id);
    setPopUp({ in: !PopUp.in, item: tasks[index] });
  };
  const editTask = (text) => {
    const newTask = [...tasks];
    const index = newTask.findIndex((task) => task.id === PopUp.item.id);
    newTask[index].topic = text.topic;
    newTask[index].content = text.content;
    setTasks(newTask);
    localStorage.setItem('tasks', JSON.stringify(newTask));
  };
  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTasks,
        deleteTask,
        doneTask,
        PopUp,
        setPopUp,
        setId,
        deleteAll,
        editTask,
        doneTaskList,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
export default TaskContext;
