import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/hamsters' || 'https://murmuring-fortress-23751.herokuapp.com/hamsters')
      .then(response => response.json())
      .then(data => console.log(data));
  },[]);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
