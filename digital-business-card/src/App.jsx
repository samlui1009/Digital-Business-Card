import { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card.jsx';
// import Toggle from './components/Toggle.jsx';

function App() {
    const [isDark, setIsDark] = useState(true);
    // Starting in dark mode, because isDark == true

    useEffect(() => {
        document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    }, [isDark]);
    // If isDark == true, set the theme to "dark"
    // Otherwise, set the theme to "light"

  return (
    <>
      <div className="homepage" data-theme={isDark ? "dark" : "light"}>
        {/* <Toggle 
        isChecked={isDark}
        handleChange={() => setIsDark(prev => !prev)}></Toggle>
        Prev is the previous state of isDark, just a parameter name */}
        <Card></Card>
      </div>
    </>
  )
}

export default App
