import React, { useState } from 'react'
import Counters from './components/counters'
import NavBar from './components/navbar'

function App() {
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
    <div className='p-3 mx-auto col-lg-8 py-md-5'>
      <main>
        <NavBar totalItems={counters.reduce((a, c) => a + c.value, 0)} />
        <Counters
          onReset={handleReset}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          counters={counters}
        />
      </main>
    </div>
  )
}

export default App
