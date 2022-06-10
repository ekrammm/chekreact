import React from 'react'
import './App.css';
import Navbarr from './components/Navbarr';
import 'bootstrap/dist/css/bootstrap.min.css';
import im from "./fleurs.jpg"


function App() {
  return (
    <div>
<Navbarr/>

<div style={{border:'solid 1px black', maxWidth:"100vw"}} >
<div className='box'>
  <h1 className="title"> ekram selmi </h1>
  </div>

  <br />

  <img src="C:\Users\pc\Desktop\JSX\projetjx\public\les.jpg" alt="les" /> 
 <br />

  
  <img src={im} alt="profile" /> 
</div>

<video width="320" height="240" controls>

 <source src="myVideo.mp4" type="video/mp4"/>

</video>
    </div>

  );
}

export default App;
