import React from 'react'
import { CounterTypes } from './counter.types'

export default function Counter(props: CounterTypes) {
  return (
    <div>
      <h1>Counter</h1>
      <p>{props.count}</p>

      {props.handleIncrement && (
        <button onClick={props.handleIncrement}>Increment</button>
      )}

      {props.handleDecrement && (
        <button onClick={props.handleDecrement}>Decrement</button>
      )}

    </div>
  )
}
