import { Component } from "../common/Component.js";

export class AddTodo extends Component {
  constructor(props) {
    super(props)
    this.handleAddTodo = this.handleAddTodo.bind(this)
  }

  handleAddTodo() {
    const inputElement = document.getElementById('todo-input')
    const task = inputElement.value.trim()

    if(task) {
      this.props.todoContext.addTodo(task)
      inputElement.value = ''
    }
  }
  render() {
    const addElement = document.createElement('div')
    addElement.className = "add-todo"
    addElement.innerHTML = `
      <input type="text" id="todo-input" placeholder="Enter task details...">
      <button id="todo-btn-add">Add To Do</button>
    `

    addElement.querySelector('#todo-btn-add').addEventListener('click', this.handleAddTodo)

    return addElement;
  }
}