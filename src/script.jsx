import axios from 'axios';
import React from 'react';
import { render } from 'react-dom';
// Explicit Import fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

window.newTodo = function () {
  let input = prompt('Please Enter a To-do item.\n' +
    'Clicking on the added item will toggle it complete/incomplete.\n' +
    'Click on the trash bin will delete the added item.');
  todoList.addTodoItem(input)
}

// TodoList Component
class TodoList extends React.Component {
  // Lifecycle method
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
    // mockapi for presistent data 
    this.apiUrl = 'https://5cef6b755660c40014948c42.mockapi.io/api/v1/todo'
  }

  // Lifecycle method
  componentDidMount() {
    // Make HTTP reques with Axios
    axios.get(this.apiUrl)
      .then((res) => {
        // Set state with result from api
        this.setState({ data: res.data });
      });
  }

  // count total todo item
  count() {
    return this.state.data.length
  }
  // count incomplete item
  incompleteCount() {
    return this.state.data.reduce((count, todoItem) => {
      return !todoItem.completed ? count + 1 : count
    }, 0)
  }

  // Add todo item handler
  // add todo item and post new item to API
  addTodoItem(val) {
    // Assemble data
    const todo = {
      item: val,
      completed: false
    }
    // Update data
    axios.post(this.apiUrl, todo)
      .then((res) => {
        this.state.data.push(res.data);
        this.setState({ data: this.state.data });
      });
  }

  // Remove todo item handler
  // remore todo item and call delete to API
  removeTodo(id) {
    // Filter all todos except the one to be removed
    const remainder = this.state.data.filter((todo) => {
      if (todo.id !== id) return todo;
    });
    // Update state with filter
    axios.delete(this.apiUrl + '/' + id)
      .then((res) => {
        this.setState({ data: remainder });
      })
  }

  // toggle completed item and update API
  makeComplete(i) {
    let tempData = this.state.data.slice()
    tempData[i].completed = !tempData[i].completed
    // Update completed 
    axios.put(this.apiUrl + '/' + tempData[i].id, { completed: tempData[i].completed })
      .then((res) => {
        this.state.data.push(res.data);
        this.setState({ data: tempData });
      });
  }

  // set up renderTodo
  renderTodo(i) {
    return (<Todo
      key={this.state.data[i].item.replace(/(\s+|\W+)/g, '_') + '-' + this.state.data[i].id}
      markComplete={() => this.makeComplete(i)}
      remove={() => this.removeTodo(this.state.data[i].id)}
      text={this.state.data[i].item}
      completed={this.state.data[i].completed} />)
  }

  // Lifecycle method
  // invoked immediately after updating occurs to update count
  componentDidUpdate() {
    uncheckedCountSpan.innerText = this.incompleteCount()
    itemCountSpan.innerText = this.count()
  }

  // Lifecycle method
  render() {
    return this.state.data.map((_todo, index) => {
      return this.renderTodo(index)
    })
  }

}

// Todo item Component
class Todo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <li>
        <span className='todo-item'
          style={{ color: this.props.completed ? '#888' : '#000', cursor: 'pointer'}}
          onClick={this.props.markComplete}>
          {this.props.text}
        </span>
        <span className='todo-delete'
          style={{cursor: 'pointer'}}
          onClick={this.props.remove}>
          <FontAwesomeIcon icon={faTrash} />
        </span>
      </li>
    );
  }
}

const todoList = render(<TodoList />, list);