import './OverLay.css'
import { useContext } from 'react';
import TaskContext from '../context/TaskContext';
const OverLay = ({ children }) => {
  const {PopUp} = useContext(TaskContext);
  return <div className={PopUp.in === true ? 'over-lay show' : 'over-lay'}>{children}</div>;
};
export default OverLay;
