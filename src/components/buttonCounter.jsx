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
        className='btn btn-secondary'
        style={{ fontSize: '2rem', margin: '.5em'}}
      >
        {props.actionButton.nameButton}
      </button>
  )
}

export default ButtonCounter
