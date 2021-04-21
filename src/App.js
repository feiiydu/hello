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
import User from "./components/User";

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <User info="User 01"/>
          <User info="User 02"/>
          <User info="User 03"/>
        </ul>
      </div>
    )
  }
}

export default App;