// // import logo from './logo.svg';
// import './App.css';

// const App = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         Nonggap was here!       
//       </header>
//     </div>
//   );
// }

// export default App;

import { Component } from "react";
import Clock from "./components/Clock";
import User from "./components/User";
import Form from "./components/Form";


function App() {

  users = [
    {id: 1, name: "nonggap", age:25},
    {id: 2, name: "nongnost", age:25},
    {id: 3, name: "nongfei", age:25},
  ];
  
  
  var message = "---------";

  // arrow function : function at value
  const newSession = (input) => {
    message = "New Session : " + input
  };

 
    return (
      <div className="App">
        <header className="App-header">
          Nonggap was here!       
        </header>
        <User users={users}/>
        <Clock title="Current date ="/>
        <Form onSayHi={this.newSession}/>
        <p>
          {this.state.message}
        </p>
      </div>
    )
  }


export default App;