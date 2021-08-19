import React, { useState } from 'react'
import ButtonCounter from '../components/buttonCounter'
import Context from './context'

const Counter = () => {
  const [count, setCount] = useState(1)

  const getBageclasses = () => {
    let classes = ' badge m-2 bg-'
    classes += count === 0 ? 'danger' : 'primary'
    return classes
  }

  const actionButtonIncrement = {
    action: 'increment',
    nameButton: '+',
  }

  const actionButtonDecrement = {
    action: 'decrement',
    nameButton: '-',
  }

  return (
    <Context.Provider value={{ count, setCount }}>
      <>
        <span className={getBageclasses()} style={{ fontSize: '2rem' }}>
          {count}
        </span>

        <ButtonCounter actionButton={actionButtonIncrement} />
        <ButtonCounter actionButton={actionButtonDecrement} />
      </>
    </Context.Provider>
  )
}

export default Counter