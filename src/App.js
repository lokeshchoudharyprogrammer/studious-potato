import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">



      <header className="App-header">
      <p>hello</p>
      <img src={logo} className="App-logo" alt="logo" />
      <p>this is a app.jsx page</p>
        
        <p>
          Counter App by haris
        </p>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>

      </header>
    </div>
  );
}

export default App;