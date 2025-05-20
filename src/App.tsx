import { useState } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    
      
      
      
       <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">Swahilipot Hub Foundation</div>
          <ul className="nav-links">
            <li 
              className={activeSection === 'home' ? 'active' : ''}
              onClick={() => setActiveSection('home')}
            >
              Home
            </li>
            <li
              className={activeSection === 'about' ? 'active' : ''}
              onClick={() => setActiveSection('about')}
            >
              About Event
            </li>
            <li 
              className={activeSection === 'contacts' ? 'active' : ''}
              onClick={() => setActiveSection('contacts')}
            >
              Contacts
            </li>
          </ul>
        </div>
      </nav>


      
    </div>
  );
}

export default App
