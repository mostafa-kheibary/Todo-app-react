import Tasks from './components/Tasks/Tasks';
import AddTask from './components/AddTask/AddTask';
import Header from './components/Header/Header';
const App = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <AddTask />
        <Tasks />
      </div>
    </>
  );
};
export default App;
