import './Task.css';
const Task = () => {
  return (
    <div className='task'>
      <span className='task-line'></span>
      <div className='task__status'>
        <div className='ball task__close'></div>
        <div className='ball task__edit'></div>
        <div className='ball task__done'></div>
      </div>
      <h4 className='task__title'>this is test</h4>
      <p className='task__content'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores,
        cum? Dignissimos quae vitae, corporis neque doloremque saepe,
        perferendis numquam expedita
      </p>
    </div>
  );
};
export default Task;
