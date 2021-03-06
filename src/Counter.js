import {observer} from 'mobx-react-lite'
import React from 'react'
import './App.css'
import counter from './store/counter'

// Вызов любой функции с вызванным makeAutoObservable спровоцирует перерисовку компоненты, если она будет обёрнута в функцию observer
const Counter = observer(() => {
  return (
    <div className="counter">
      {'Count = ' + counter.count}
      <div className="btns">
        <button className="btn" onClick={() => counter.increment()}>
          +
        </button>
        <button className="btn" onClick={() => counter.decrement()}>
          -
        </button>
      </div>
    </div>
  )
})

export default Counter
