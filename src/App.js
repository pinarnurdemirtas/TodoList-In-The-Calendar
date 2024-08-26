import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calender from './component/Calender'; // Calender bileşenini import et
import Todo from './component/Todolist'; // Todo bileşenini import et

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Calender />} />
      <Route path="/todo/:date" element={<Todo />} />
    </Routes>
  );
};

export default App;
