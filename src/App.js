import Tasks from './components/Tasks/Tasks';
import AddTask from './components/AddTask/AddTask';
import Header from './components/Header/Header';
import { TaskProvider } from './components/context/TaskContext';
const App = () => {
  return (
    <TaskProvider>
      <Header />
      <div className='container'>
        <AddTask />
        <Tasks />
      </div>
    </TaskProvider>
  );
};
export default App;
