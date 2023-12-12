// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <> {/*jsx fragment*/}
//     <h1>This is a heading</h1>
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React from zero
//         </a>
//       </header>
//     </div>
//     </>
//   );
// }

// export default App;




// import './App.css';

// const name = "SS"
// function App() {
//   return (
//     <>
//     <nav>
//       <p className="navbarLogo">Logo</p>
//       <ul>
//         <li>Home</li>
//         <li>Contact</li>
//         <li>Help</li>
//       </ul>
//     </nav>
//     <div className="introText">
//       <h1>Hello {name}</h1>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit deleniti, delectus architecto soluta ipsam odio! Nemo, tenetur assumenda? Impedit enim quas odio maiores asperiores expedita debitis consequuntur accusamus, error soluta! Repudiandae, enim quidem praesentium adipisci vitae, mollitia corrupti obcaecati sint non et minima sapiente magnam magni. Deleniti omnis modi natus doloribus inventore, magnam atque debitis minus dignissimos, iste architecto fuga eos sequi ut error repellat magni reiciendis fugit corporis? Magnam animi similique officia voluptatum aspernatur aliquam blanditiis, porro nostrum repudiandae numquam libero debitis tempore rerum veniam eos assumenda id impedit reiciendis cupiditate iste enim doloribus temporibus? Quod recusandae ipsa consequuntur.
//     </div>
//     </>
//   );
// }

// export default App;








import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import About from './components/About';
import { 
  BrowserRouter as Router,
  Routes,// Switch,
  Route,
  // Link
} from 'react-router-dom';

function App() {
  /* handle alert msg */
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  /* handle dark background color */
  // const [color, setColor] = useState('black'); // not working properly - showing last selected color
  // document.getElementById('btnradio2').checked = true;
  let bgColor = 'black', bgColorCode = '#292f34';
  const setBgColor = (colr) => {
    bgColor = colr;
  }

  const handleBgColor = () => {
    var selected = document.querySelector('input[name="btnradio"]:checked');
    console.log(selected.id + ' checked');
    if(selected.id === "btnradio1") {
      setBgColor('Blue');
      bgColorCode = '#00244C';
      console.log("button1 - blue clicked : color is " + bgColor);
    }
    else if(selected.id === "btnradio2") {
      setBgColor('Black');
      bgColorCode = '#292f34';
      console.log("button2 - black clicked : color is " + bgColor);
    }
    else if(selected.id === "btnradio3") {
      setBgColor('Green');
      bgColorCode = '#002800';
      console.log("button3 - green clicked : color is " + bgColor);
    }
    if(mode === 'dark')
      document.body.style.backgroundColor = bgColorCode;
    showAlert("Color changed to " + bgColor, "Warning");
    // console.log(bgColor);
  }

  /* handle light mode - dark mode */
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#292f34';
      showAlert("DarkMode has been enabled", "Success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("LightMode has been enabled", "Success");
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} changeBgColor={handleBgColor} showAlert={showAlert}/>
        <Alert alertMsg={alert}/>
        <div className="container my-3">
          <Routes>{/* <Switch> */}
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}/>
              {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> */}
            {/* </Route> */}
            <Route exact path="/about" element={<About mode={mode}/>}/>
              {/* <About mode={mode}/> */}
            {/* </Route> */}
          </Routes>{/* </Switch> */}
        </div>
      </Router>
    </>
  );
}

export default App;
