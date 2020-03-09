import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
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
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  state = {
    todos: [
      { id: 1, name: "Bananas", complete: true, },
      { id: 2, name: "Milk", complete: false, },
      { id: 3, name: "Kitty Litter", complete: false, },
    ]
  };

renderTodos = () => {
  const { todos, } = this.state;
  return todos.map( todo => 
    <li key={todo.id}>{todo.name}</li>
  )
};
  render() {
    return (
      <div>
      </div>
    );
  }
}

export default App;
