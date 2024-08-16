import './App.css';
import Todo from './Components/Todo.jsx';
import Title from './Components/Title.jsx';
import Modal from './Components/Modal.jsx';


function App() {
  return (
    <> 
      <Title />
      <div>
        <input type="text" placeholder="Add an item" onChange={(event) => {
          console.log(event.target.value)
        }} />
        <button>Add To Do</button>
      </div>
      <div className="todo__wrap">
        <Todo 
          title="Finish FES"
          paragraph="Code along and get learnt"
        />
        <Todo 
          title="Finish Interview Section"
          paragraph="solve all of the problems"
        />
        <Todo 
          title="Apply for 100 jobs"
          paragraph="There's a way to do it better - find it"
        />
      </div>
      <Modal
        question="Are you sure?"
      />
    </>
  );
}

export default App;
