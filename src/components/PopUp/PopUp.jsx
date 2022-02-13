import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import TaskContext from '../context/TaskContext';
import './PopUp.css';
const PopUp = () => {
  const [text, setText] = useState({ topic: '', content: '' });
  const { PopUp, setPopUp, editTask } = useContext(TaskContext);
  const handleSubmit = (isOk) => {
    if (isOk === true) {
      toast.success('Task was successfully edited');
      console.log('yes');
      editTask(text);
    }
    setPopUp({ in: false, item: null });
    setText({ topic: '', content: '' });
  };

  const handleTopic = (e) => {
    setText({ ...text, topic: e.target.value });
  };
  const handleContent = (e) => {
    setText({ ...text, content: e.target.value });
  };
  return (
    <div className={PopUp.in === false ? 'pop-up' : 'pop-up pop-up-show'}>
      <h4 className='pop-up__title'>Are you sure to edit ?</h4>
      <input
        maxLength={50}
        placeholder={
          PopUp.item !== null ? 'you editing ' + PopUp.item.topic : 'nothing'
        }
        value={text.topic}
        onChange={handleTopic}
        type='text'
        className='pop-up__input'
      />
      <textarea
        maxLength={75}
        value={text.content}
        onChange={handleContent}
        className='pop-up__content'
        placeholder='edit content ...'
      ></textarea>
      <div className='pop-up__buttons'>
        <button
          onClick={() => handleSubmit(true)}
          className='pop-up__button ok'
        >
          confirm
        </button>
        <button
          onClick={() => handleSubmit(false)}
          className='pop-up__button no'
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
export default PopUp;
