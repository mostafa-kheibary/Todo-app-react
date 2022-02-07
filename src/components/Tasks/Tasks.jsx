import Task from '../Task/Task';
import './Tasks.css';
const Tasks = () => {
  return (
    <div className='tasks'>
      <div className='tasks__title'>
        <img className='tasks__title__icon' src='./svg/all-task.svg' alt='' />
        <h2 className='tasks__title__text'>All Tasks</h2>
      </div>
      <div className='tasks__sort'>
        <select name='' id=''>
          <option value=''>All Tasks</option>
          <option value=''>Done Tasks</option>
        </select>
      </div>
      <div className='tasks__container'>
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  );
};
export default Tasks;
