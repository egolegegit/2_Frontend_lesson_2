import React, { useContext } from 'react'
import Context from './context'

const ButtonCounter = (props) => {
  const { count,setCount } = useContext(Context)

  const handleIncrement = () => {
    setCount(count + 1)
  }
  const handleDecrement = () => {
    setCount(count > 0 ? count - 1 : 0)
  }

  const actionClick = {
    increment: handleIncrement,
    decrement: handleDecrement,
  }

  return (
    <button
      onClick={actionClick[props.actionButton.action]}
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded w-2 h-auto flex align-middle justify-center mx-1'
    >
      {props.actionButton.nameButton}
    </button>
  )
}

export default ButtonCounter
