import React from 'react'

const Counter = ({ name, value, id, onIncrement, onDecrement, onDelete }) => {
  const getBageClasses = () => {
    let classes =
      ' rounded-full h-14 w-14 flex items-center justify-center text-white font-bold bg-'
    classes += value === 0 ? 'danger' : 'primary'
    return classes
  }

  return (
    <>
      <h4 className='mr-2'>{name}</h4>
      <div className='flex mb-4'>
        <span className={getBageClasses()} style={{ fontSize: '2rem' }}>
          {value}
        </span>
        <button
          onClick={() => onIncrement(id)}
          className='flex justify-center w-2 h-auto px-4 py-3 mx-1 font-bold text-white align-middle bg-blue-500 rounded hover:bg-blue-700'
        >
          {'+'}
        </button>
        <button
          onClick={() => onDecrement(id)}
          className='flex justify-center w-2 h-auto px-4 py-3 mx-1 font-bold text-white align-middle bg-blue-500 rounded hover:bg-blue-700'
        >
          {'-'}
        </button>
        <button
          className='flex justify-center w-2 h-auto px-4 py-3 mx-1 font-bold text-white align-middle bg-red-400 rounded hover:bg-red-500'
          onClick={() => onDelete(id)}
        >
          {'x'}
        </button>
      </div>
    </>
  )
}

export default Counter
