import './AddTask.css'
const AddTask = () => {
  return (
    <div className='add-task'>
      <div className='add-task__title'>
        <img
          className='add-task__title__icon'
          src='./svg/add-task.svg'
          alt=''
        />
        <h2 className='add-task__title__text'>Make New Task</h2>
      </div>
      <div className='add-task__inputs'>
        <input
          className='input add-task__inputs__name'
          type='text'
          placeholder='your task topic'
        />
        <textarea
          className='input add-task__inputs__content'
          type='text'
          placeholder='more info about task'
        />
        <button className='add-task__inputs__submit'>Create New Task</button>
      </div>
    </div>
  );
};

export default AddTask;
