import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
    const [mode,setMode] = useState('light')
    const[dMode,setdMode] = useState('Enable Dark Mode')
    const toggleMode = ()=>{
      if(mode==='light')
      {
        setMode('dark');
        document.body.style.backgroundColor = "#232324";
        showAlert("Dark mode has been enabled","Success")
        setdMode("Disable Dark Mode")
      }
      else
      {
        setMode('light');
        document.body.style.backgroundColor = "white";
        showAlert("Light mode has been enabled","Success")
        setdMode("Enable Dark Mode")
      }
    }
    const[alert,SetAlert] = useState(null)

    const showAlert = (message,type)=>{
      SetAlert({
        msg: message,
        type: type
      })
    }
    setTimeout(() => {
      SetAlert(null)
    }, 2000);
    // setInterval(()=>{
    //   document.title='Install TextUtils Now'
    // },2000)
    // setInterval(()=>{
    //   document.title='TextUtils Is Amazing'
    // },1500)
   
  return (
    <>
    <Router>
    <Navbar websiteName="TextUtils" mode={mode} toggleMode={toggleMode} dMode={dMode}/>
    <Alert alert={alert}/>
    <Switch>
          <Route path="/about">
            <About />
          </Route>
    
          <Route path="/">
          <div className="container">
   <TextForm mode={mode} showAlert={showAlert}/>
   </div>
          </Route>
        </Switch>
   </Router>
  </>
  );
}

export default App;
