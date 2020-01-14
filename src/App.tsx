import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {

  const [txt, setTxt] = useState<string>('')

  useEffect(() => {
    async function fetchData() {
      const rep = await fetch('/api/hello')
      const txt = await rep.text()

      console.log(txt)
      setTxt(txt)
    }
    fetchData();
  }, [])

  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn @React
        </a>
        {txt}
      </header>
    </div>
  );
}

export default App;
