import React from 'react'
import Counter from './counter'

const Counters = ({ onReset, counters, ...rest }) => {
  return (
    <div className='flex flex-col'>
      <button onClick={onReset} className='mb-8 btn btn-primary btn-sm'>
        Reset
      </button>

      {counters.map((counter) => (
        <Counter key={counter.id} {...counter} {...rest} />
      ))}
    </div>
  )
}

export default Counters
