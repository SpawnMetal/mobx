import {makeAutoObservable} from 'mobx'

class Counter {
  count = 0

  constructor() {
    makeAutoObservable(this) // Подключает наблюдение за компонентом, все функции становятся Observable
  }

  // Вызов любой функции спровоцирует перерисовку компоненты, если она будет обёрнута в функцию observer
  increment() {
    this.count++
  }

  decrement() {
    this.count--
  }
}

export default new Counter()
