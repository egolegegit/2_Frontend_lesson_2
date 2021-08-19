import React, { useState } from 'react'
import ButtonCounter from '../components/buttonCounter'
import Context from './context'

const Counter = () => {
  const [count, setCount] = useState(0)

  const getBageclasses = () => {
    let classes =
      ' rounded-full h-14 w-14 flex items-center justify-center text-white font-bold bg-'
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
