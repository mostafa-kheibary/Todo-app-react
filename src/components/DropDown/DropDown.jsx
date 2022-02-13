import './DropDown.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
const DropDown = ({chnageCatagory,all}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleChnage = (e)=>{
    chnageCatagory(e)
    handleOpen();
  }
  return (
    <motion.div whileTap={{scale:.9}} className='drop-down'>
      <button onClick={handleOpen} className='drop-down__change'>
        {all===true ? 'All Task' : 'Done Task'} <span>▼</span>
      </button>
      <div className={`item-container ${isOpen === true && 'show'}`}>
        <div onClick={(e)=>handleChnage(e)} data-catagory='all' className='drop-down__item'>All Task</div>
        <div onClick={(e)=>handleChnage(e)} data-catagory='done' className='drop-down__item'>ِDone Task</div>
      </div>
    </motion.div>
  );
};
export default DropDown;
