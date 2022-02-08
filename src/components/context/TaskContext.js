import { v4 as uuid4 } from 'uuid';
import { createContext, useState } from 'react';
const TaskContext = createContext();
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [PopUp, setPopUp] = useState({ in: false, id: null });
  const addTasks = (topic, content) => {
    const newTask = {
      id: uuid4(),
      isDone: false,
      topic,
      content,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    const newTask = tasks.filter((task) => task.id !== id);
    setTasks(newTask);
  };
  const doneTask = (id) => {
    const newTask = [...tasks];
    const index = newTask.findIndex((task) => task.id === id);
    newTask[index].isDone = !newTask[index].isDone;
    setTasks(newTask);
  };
  const setId = (id) => {
    setPopUp({ in: !PopUp.in, id: id });
  };
  const editTask = (text) => {
    const newTask = [...tasks];
    const index = newTask.findIndex((task) => task.id === PopUp.id);
    newTask[index].topic = text;
    setTasks(newTask);
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
        editTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
export default TaskContext;
