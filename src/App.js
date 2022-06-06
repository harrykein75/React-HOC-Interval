import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HOC interval={3000}>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </HOC>
      </header>
    </div>
  );
}

export default App;


const HOC = ({
  children,
  interval = 3000
}) => {

  const [isVisible, setVisible] = useState(false);
  useEffect(() => {
    const key = setInterval(() => {
      setVisible(!isVisible)
    }, interval)
    return () => {
      clearInterval(key);
    }
  })

  return (
    <div>
      {isVisible ? <div>
        {children}
      </div> : ""}
    </div>
  )
}
