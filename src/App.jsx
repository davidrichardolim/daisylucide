import React from 'react'
import Counter from './components/Counter'
import ThemeSwap from './components/ThemeSwap'

const App = () => {
  return (
    <div>
      <h1>hello!!</h1>
      <button className='btn btn-secondary'>PENCET DI SINI</button>

      <Counter/>
      <ThemeSwap/>
    </div>
  )
}

export default App