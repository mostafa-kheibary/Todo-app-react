import { createContext, useState } from 'react';
const TaskContext = createContext();
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      isDone: false,
      topic: 'this is test',
      content: 'this is test from context , content lorem randoem',
    },
    {
      isDone: true,
      topic: 'this is test two',
      content: 'this is test from context , content lorem randoem',
    },
  ]);
  const addTasks = (topic, content) => {
    const newTask = {
      isDone: false,
      topic,
      content,
    };
    setTasks([...tasks , newTask]);
  };
  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTasks
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
export default TaskContext;
