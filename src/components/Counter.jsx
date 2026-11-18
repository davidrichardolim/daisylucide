import React, { useState } from 'react'

function Counter () {
    const [angka, setAngka] = useState(0)

    const handleIncrement = () => {
      setAngka((angka * 3) + 1)
    }

    const handleDecrement = () => {
      setAngka(angka / 2)
    }

    const reset = () => {
      setAngka(angka - angka)
    }
  return (
    <div>
        <h1 className='text-6x1 font-bold'>{angka}</h1>
        <button className='btn btn-info' onClick={handleIncrement}>3n + 1</button>
        <button className='btn btn-warning' onClick={handleDecrement}>/ 2</button>
        <button className='btn btn-warning' onClick={reset}>reset</button>
    </div>
  )
}

export default Counter