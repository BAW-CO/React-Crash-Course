import './App.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Nav from './Components/Nav.jsx';
import Users from './Pages/Users.jsx';

// import Todo from './Components/Todo.jsx';
// import Title from './Components/Title.jsx';
// import Modal from './Components/Modal.jsx';
// import React, { useState, useEffect } from 'react';
// import Counter from './Components/Counter.jsx';
// import Cart from './Components/Cart.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;




  // const [showModal, setShowModal] = useState(false)
  // function onTodoDelete() {
  //   setShowModal(true)
  //   console.log('onTodoDelete()')
  // }

  // function cancelModal() {
  //   setShowModal(false)
  // }

  // function confirmModal() {
  //   setShowModal(false)
  // }

  // useEffect(() => {
  //   console.log('ONLY on mount')
  // }, [])

  // useEffect(() => {
  //   console.log('on mount AND on ${showModal} change')
  // }, [showModal])



  //   <> 
  //     <Title />
  //     <div>
  //       <input type="text" placeholder="Add an item" onChange={(event) => {
  //         console.log(event.target.value)
  //       }} />
  //       <button onClick={() => setShowModal(true)}>Add To Do</button>
  //     </div>
  //     <div className="todo__wrap">
  //       <Todo onTodoDelete={onTodoDelete} 
  //         title="Finish FES"
  //         paragraph="Code along and get skooled"
  //       />
  //       <Todo onTodoDelete={onTodoDelete} 
  //         title="Finish Interview Section"
  //         paragraph="solve all of the problems"
  //       />
  //       <Todo onTodoDelete={onTodoDelete} 
  //         title="Apply for 100 jobs"
  //         paragraph="There's a way to do it better - find it"
  //       />
  //     </div>
  //     {showModal && <Modal 
  //     cancelModal={cancelModal} 
  //     confirmModal={confirmModal} 
  //     question="Confirm Delete?"/>}
  //   </>
  // );
