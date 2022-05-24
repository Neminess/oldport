import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './index.css';
import Navbar from './Navbar';
import About from './About';
import PastProjects from './PastProjects';
import Contact from './Contact';
import SiteInfo from './SiteInfo';


export default function App(){
return(
  <Router>
   <Navbar/>
      <Routes>
        <Route path="/SiteInfo" exact element={<SiteInfo/>}></Route>
        <Route path="/About" exact element={<About/>}></Route>
        <Route path="/PastProjects" exact element={<PastProjects/>}></Route>
        <Route path="/Contact" exact element={<Contact/>}></Route>
      </Routes>
  </Router>
)};
const root = ReactDOM.createRoot(
  document.getElementById('root'));
  root.render(<App/>);
//consult https://www.educative.io/blog/react-router-tutorial
// and https://blog.logrocket.com/creating-navbar-react/
