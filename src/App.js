import React, { Component } from 'react';
import List from './List';
import TodoForm from './TodoForm';

class App extends Component {
  state = { 
    todos: [
      { id: 1, name: 'Bananas', complete: true },
      { id: 2, name: 'Milk', complete: false },
      { id: 3, name: 'Kitty Litter', complete: false },
      { id: 4, name: 'Natural Organic Raw Artisan Artichoke Hearts', complete: false },

    ] 
  }

  getUniqId = () => {
   return Math.floor((1 + Math.random()) * 0x10000)
     .toString(16)
     .substring(1);
  }

addItem = (name) => {
const { todos } = this.state;
const todo = { name, id: this.getUniqId() , complete: false }
this.setState({ todos: [todo, ...todos] }); 
}

handleClick = (id) => {
  const { todos } = this.state;
  this.setState({
    todos: todos.map( todo => {
      if (todo.id === id) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo
    })
  })
}

render() {
const { todos } = this.state;

return (
  <div>
    <TodoForm addItem={this.addItem} />
    <List name="Todo List" items={todos} todoClick={this.handleClick} />
  </div>
);
}
}

export default App;