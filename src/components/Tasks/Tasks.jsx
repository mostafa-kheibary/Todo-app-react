import DropDown from '../DropDown/DropDown';
import { AnimatePresence } from 'framer-motion';
import taskContext from '../context/TaskContext';
import { useContext, useState } from 'react';
import Task from '../Task/Task';
import './Tasks.css';
const Tasks = () => {
  const [all, setAll] = useState(true);
  const { tasks, doneTaskList } = useContext(taskContext);
  const handlechange = (e) => {
    if (e.target.dataset.catagory === 'all') {
      setAll(true);
    } else if (e.target.dataset.catagory === 'done') {
      setAll(false);
    }
  };
  return (
    <div className='tasks'>
      <div className='tasks__title'>
        <img className='tasks__title__icon' src='./svg/all-task.svg' alt='' />
        <h2 className='tasks__title__text'>All Tasks</h2>
      </div>
      <div className='tasks__sort'>
        <DropDown chnageCatagory={handlechange} all={all} />
      </div>
      <div className='tasks__container'>
        <AnimatePresence>
          {all === true
            ? tasks.map((task) => (
                <Task
                  key={task.id}
                  id={task.id}
                  isDone={task.isDone}
                  topic={task.topic}
                  content={task.content}
                />
              ))
            : doneTaskList.map((task) => (
                <Task
                  key={task.id}
                  id={task.id}
                  isDone={task.isDone}
                  topic={task.topic}
                  content={task.content}
                />
              ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
export default Tasks;
