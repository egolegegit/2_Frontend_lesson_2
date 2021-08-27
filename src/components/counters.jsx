import React, { useState } from 'react'
import Counter from './counter'

const Counters = () => {
  const initialState = [
    { value: 0, id: 1, name: 'ложка' },
    { value: 0, id: 2, name: 'вилка' },
    { value: 0, id: 3, name: 'тарелка' },
    { value: 0, id: 4, name: 'стартовый набор' },
    { value: 0, id: 5, name: 'ненужные весчи' },
  ]

  const [counters, setCounters] = useState(initialState)

  const handleDelete = (counterId) => {
    const newCounters = counters.filter((counter) => counter.id !== counterId)
    setCounters(newCounters)
  }

  const handleReset = () => {
    setCounters(initialState)
  }

  const handleIncrement = (counterId) => {
    const newCounters = counters.reduce((acc, counter) => {
      if (counter.id === counterId) {
        counter.value += 1
      }
      acc.push(counter)
      return acc
    }, [])
    setCounters(newCounters)
  }
  const handleDecrement = (counterId) => {
    const newCounters = counters.reduce((acc, counter) => {
      if (counter.id === counterId) {
        counter.value = counter.value > 0 ? counter.value - 1 : 0
      }
      acc.push(counter)
      return acc
    }, [])
    setCounters(newCounters)
  }

  return (
    <div className='flex flex-col'>
      <button onClick={handleReset} className='btn btn-primary btn-sm m2'>
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...counter}
        />
      ))}
    </div>
  )
}

export default Counters
