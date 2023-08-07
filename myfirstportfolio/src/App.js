import logo from './logo.svg';
import './App.css';
import Header from './Mycomponents/Header';
import Footer from './Mycomponents/Footer';
import ToDos from './Mycomponents/ToDos';
import React, { useState,useEffect } from 'react';
import About from "./Mycomponents/About";
import AddTodo from './Mycomponents/AddTodo';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  //delete function
  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    
  }

  //add function
  const addTodo = (title, desc) => {
    let sno;
    if (todos.length == 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  //useState
  const [todos, setTodos] = useState(initTodo);
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos])

  return (
    <Router>
      <Header title="WhatToDoToday" searchBar={false} />
      <Routes>
        <Route exact path="/" element={
          <>
            <AddTodo addTodo={addTodo} />
            <ToDos todos={todos} onDelete={onDelete} />
          </>
        } />
        <Route exact path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
