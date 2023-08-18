
import './App.css';
import Navbar from './components/navbar';
import Addnewbook from './components/addnewbook';
import Calender from './components/calender';
import Addimage from './components/addimage';
import Homepage from './components/homepage';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

function App() {
  return (

    
<div>
    

    <Navbar/>
    
              <Routes>
                     
                     <Route path="/" element={<Homepage />}/>
                
                      <Route path='/homepage' element={<><Homepage/></>}/>
                     
                      <Route path='/addnewstudent' element={<><Addnewbook /><Calender /><Addimage /></>}/>
                      
                    
                      
              </Routes>
              
  </div>
    
  );
}

export default App;
