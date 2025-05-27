import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
// import { Hackathon } from './Hackathon'
// If the file is named differently, update the import path accordingly, e.g.:
import { Hackathon } from './Hackathon';
// Or, if the file does not exist, create 'Hackathon.tsx' or 'Hackathon.js' in the same directory and export 'Hackathon' from it.
import './App.css';
import Header from './header';
import { About } from './About';
import Navbar from './Navbar';
import Peeches from './peeches';
import InfoPanel from './InfoPanel';
import Contact from './Contact';
import { Footer } from './Footer';
function App() {
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsx(About, {}), _jsx(Navbar, {}), _jsx(Peeches, {}), _jsx(InfoPanel, {}), _jsx(Hackathon, {}), _jsx(Footer, {}), _jsx(Contact, {})] }));
}
export default App;
