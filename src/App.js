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

class App extends Component {

  users = [
    {id: 1, name: "nonggap", age:25},
    {id: 2, name: "nongnost", age:25},
    {id: 3, name: "nongfei", age:25},
  ];

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Nonggap was here!       
        </header>
        <User users={this.users}/>
        <h1>
          <Clock title="Current date ="/>
        </h1>
        <h1>
          <Form />
        </h1>
      </div>
    )
  }
}

export default App;