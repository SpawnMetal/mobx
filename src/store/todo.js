import {makeAutoObservable} from 'mobx'

class Todo {
  todos = [
    {id: 1, title: 'Сходи в магазин', completed: false},
    {id: 2, title: 'Посмотри фильм', completed: false},
    {id: 3, title: 'Поставь лайк', completed: false},
  ]

  constructor() {
    makeAutoObservable(this)
  }

  addTodo(todo) {
    this.todos.push(todo)
  }

  removeTodos(id) {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }

  completeTodo(todo) {
    todo.completed = !todo.completed
  }

  fetchTodos() {
    const response = `[
      {"id": 4, "title": "title 4", "completed": false},
      {"id": 5, "title": "title 5", "completed": false},
      {"id": 6, "title": "title 6", "completed": false},
      {"id": 7, "title": "title 7", "completed": false},
      {"id": 8, "title": "title 8", "completed": false}
    ]`

    const json = JSON.parse(response)
    this.todos = [...this.todos, ...json]
  }
}

export default new Todo()
