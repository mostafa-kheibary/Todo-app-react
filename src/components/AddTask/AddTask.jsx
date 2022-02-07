import TaskContext from '../context/TaskContext';
import { useContext, useState } from 'react';
import './AddTask.css';
const AddTask = () => {
  const { addTasks } = useContext(TaskContext);
  const [text, setText] = useState({ topic: '', content: '' });

  const handleTopic = (e) => {
    setText({ ...text, topic: e.target.value });
  };
  const handleContent = (e) => {
    setText({ ...text, content: e.target.value });
  };
  const handleSubmit = () => {
    setText({ topic: '', content: '' });
    addTasks(text.topic, text.content);
  };
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
          value={text.topic}
          onChange={handleTopic}
          className='input add-task__inputs__name'
          type='text'
          placeholder='your task topic'
        />
        <textarea
        value={text.content}
          onChange={handleContent}
          className='input add-task__inputs__content'
          type='text'
          placeholder='more info about task'
        />
        <button onClick={handleSubmit} className='add-task__inputs__submit'>
          Create New Task
        </button>
      </div>
    </div>
  );
};

export default AddTask;
