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

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Nonggap was here!       
        </header>
        <ul>
          <User info="User 01" age="25"/>
          <User info="User 02"/>
          <User info="User 03"/>
        </ul>
        <hi>
          <Clock title="Current date ="/>
        </hi>
      </div>
    )
  }
}

export default App;