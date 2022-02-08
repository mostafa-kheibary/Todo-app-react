import { useContext, useState } from 'react';
import TaskContext from '../context/TaskContext';
import './PopUp.css';
const PopUp = () => {
  const [text, setText] = useState('');
  const { PopUp, setPopUp, editTask } = useContext(TaskContext);
  const handleSubmit = (isOk) => {
    if (isOk === true) {
      console.log('yes');
      editTask(text);
    }
    setPopUp({ in: false, id: null });
    setText('');
  };

  const handleText = (e) => {
    setText(e.target.value);
  };
  return (
    <div className={PopUp.in === false ? 'pop-up' : 'pop-up pop-up-show'}>
      <h4 className='pop-up__title'>you are editing :</h4>
      <input
        value={text}
        onChange={handleText}
        type='text'
        className='pop-up__input'
      />
      <div className='pop-up__buttons'>
        <button
          onClick={() => handleSubmit(true)}
          className='pop-up__button ok'
        >
          ok
        </button>
        <button
          onClick={() => handleSubmit(false)}
          className='pop-up__button no'
        >
          no
        </button>
      </div>
    </div>
  );
};
export default PopUp;
