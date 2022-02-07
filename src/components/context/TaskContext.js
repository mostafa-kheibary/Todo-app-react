import { v4 as uuid4 } from 'uuid';
import { createContext, useState } from 'react';
const TaskContext = createContext();
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const addTasks = (topic, content) => {
    const newTask = {
      id: uuid4(),
      isDone: false,
      topic,
      content,
    };
    setTasks([...tasks, newTask]);
  };
  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
export default TaskContext;
