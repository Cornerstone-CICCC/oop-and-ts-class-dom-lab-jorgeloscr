import { Component } from "../common/Component.js";
import { TodoItem } from "./TodoItem.js";

export class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = { todos: [] }
    this.updateTodos = this.updateTodos.bind(this)
    this.props.todoContext.subscribe(this.updateTodos)
    this.todoListElement = null
  }

  updateTodos(todos) {
    this.state.todos = todos;
    this.todoListElement.innerHTML = ''

    this.state.todos.forEach(todo => {
      const todoItem = new TodoItem({
        todo,
        todoContext: this.props.todoContext
      })
      this.todoListElement.appendChild(todoItem.render())
    })
  }

  render() {
    const todoListElement = document.createElement('div')
    todoListElement.className = "todo-list"
    todoListElement.innerHTML = `
      <ul></ul>
    `

    this.todoListElement = todoListElement.querySelector('ul')
    
    return todoListElement;
  }
}