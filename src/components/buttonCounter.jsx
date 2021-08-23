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
      className='flex justify-center w-2 h-auto px-4 py-3 mx-1 font-bold text-white align-middle bg-blue-500 rounded hover:bg-blue-700'
    >
      {props.actionButton.nameButton}
    </button>
  )
}

export default ButtonCounter
