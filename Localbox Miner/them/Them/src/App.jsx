import './App.css';
import Navbar from './component/Navbar';
import Midsection from './component/Midsection';
import { useContext } from 'react';
import { Themecontex } from './contex/Themecontex';

function App() {
  const {theme,Togglethem}=useContext(Themecontex)

  return (
  <div>
  <div style={{backgroundColor:theme==="light"?"white":"black",color:theme==="light"?"black":"white"}}>
  <Navbar/>
  <Midsection/>
  <button onClick={Togglethem}>change</button>
  </div>
 
  </div>
  );
}

export default App;