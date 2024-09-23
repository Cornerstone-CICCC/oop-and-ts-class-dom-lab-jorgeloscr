import { Component } from "../common/Component.js";

export class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleUpdate(id) {
    this.props.todoContext.updateTodo(id)
  }

  handleDelete(id) {
    this.props.todoContext.deleteTodo(id)
  }

  render() {
    const todoElement = document.createElement('li')
    todoElement.classList.add(`${this.props.todo.completed && 'completed'}`, 'todo-item' )
    todoElement.innerHTML = `
      <span>${this.props.todo.task}</span>
      <div>
        <button id='btn-complete'>${this.props.todo.completed ?  'Mark Incomplete' : 'Mark Complete'}</button>
        <button id='btn-delete'>Delete</button>
      </div>
    `

    todoElement.querySelector('#btn-complete').addEventListener('click', () => this.handleUpdate(this.props.todo.id))
    todoElement.querySelector('#btn-delete').addEventListener('click', () => this.handleDelete(this.props.todo.id))

    return todoElement;
  }
}