import React, { Component } from 'react';
import List from './List';
import TodoForm from './TodoForm';

class App extends Component {
  state = { todos: [] }

  getUniqId = () => {
   //NOTE We are just using this as a helper function for id's since we aren't using a db yet
   return Math.floor((1 + Math.random()) * 0x10000)
     .toString(16)
     .substring(1);
  }

addItem = (name) => {
const { todos } = this.state;
const todo = { name, id: this.getUniqId() , complete: false }
this.setState({ todos: [todo, ...todos] }); 
}

render() {
const { todos } = this.state;

return (
<div>
<TodoForm addItem={this.addItem} />
<List name="Todo List" items={todos} />
</div>
);
}
}

export default App;