import Tasks from './components/Tasks/Tasks';
import AddTask from './components/AddTask/AddTask';
import Header from './components/Header/Header';
import { TaskProvider } from './components/context/TaskContext';
import PopUp from './components/PopUp/PopUp';
const App = () => {
  return (
    <TaskProvider>
      <PopUp />
      <Header />
      <div className='container'>
        <AddTask />
        <Tasks />
      </div>
    </TaskProvider>
  );
};
export default App;
