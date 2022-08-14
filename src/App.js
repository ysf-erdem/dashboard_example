import './App.css';
import { FiInfo,FiPlusCircle,FiSettings } from "react-icons/fi"
import { RiHistoryLine,RiLogoutCircleLine } from "react-icons/ri"
import { FaRegUserCircle } from "react-icons/fa"
import { HiOutlineCurrencyDollar } from "react-icons/hi"
import user from './user.png'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div id="grad1">
        <div className="lbox">
          <div className="sidebox">
            <img src={user} alt="user" className="image"/>
            <h1 className="text"> Welcome, user</h1>
            <li>  &emsp; <Link to="/dashboard">       <button className="button"> <FiInfo/>                   Dashboard         &emsp; </button>  </Link></li>
            <li>  &emsp; <Link to="/new_translation"> <button className="button"> <FiPlusCircle/>             New Translation   &emsp; </button>  </Link></li>
            <li>  &emsp; <Link to="/my_projects">     <button className="button"> <RiHistoryLine/>            My Projects       &emsp; </button>  </Link></li>
            <li>  &emsp; <Link to="/my_transtators">  <button className="button"> <FaRegUserCircle/>          My Transtators    &emsp; </button>  </Link></li>
            <li>  &emsp; <Link to="/billing&payment"> <button className="button"> <HiOutlineCurrencyDollar/>  Billing & Payment &emsp; </button>  </Link></li>
            <li>  &emsp; <Link to="/settings">        <button className="button"> <FiSettings/>               Settings          &emsp; </button>  </Link></li> <h1> </h1>
            <li>  &emsp; <Link to="/logout">          <button className="button"> <RiLogoutCircleLine/>       Log  Out          &emsp; </button>  </Link></li>
          </div>
        </div>

        <Routes>
          <Route path="/dashboard"       element={<Dashboard/>} />
          <Route path="/new_translation" element={<NewTranslation />} />
          <Route path="/my_projects"     element={<MyProjects />} />
          <Route path="/my_transtators"  element={<MyTranstators />} />
          <Route path="/billing&payment" element={<BillingPayment />} />
          <Route path="/settings"        element={<Settings />} />
          <Route path="/Logout"          element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
}

function Dashboard()      {return( 
  <div className="box1">
    <p>This is "Dashboard" section.</p>
    <p>A dashboard is a visual display of all of your data. While it can be used in all kinds of different ways, 
    its primary intention is to provide information at-a-glance, such as KPIs.</p>
    <p>A dashboard usually sits on its own page and receives information from a linked database. 
    In many cases it is configurable, allowing you the ability to choose which data you want to see and whether you want to include charts or graphs to visualize the numbers.</p>
  </div>
);}

function NewTranslation() {return( 
  <div className="box1">This is "New Translation" section.</div>
);}

function MyProjects()     {return( 
  <div className="box1">This is "My Projects" section.</div>
);}

function MyTranstators()  {return( 
  <div className="box1">This is "My Transtators" section.</div>
);}

function BillingPayment() {return( 
  <div className="box1">This is "Billing & Payment" section.</div>
);}

function Settings()       {return( 
  <div className="box1">This is "Settings" section.</div>
);}

function Logout()         {return( 
  <div className="box1">Gooodbye!</div>
);}
