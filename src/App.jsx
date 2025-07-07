import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { store } from './Redux/Store'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset, incrementByAmount} from './Features/Counter/CounterSlice'



function App() {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state => state.counter.value))
  const dispatch = useDispatch()

  function handleIncrement() {
      dispatch(increment());
  }
  function handleDecrement() {
      dispatch(decrement());
  }
  function handleReset() {
    dispatch(reset());
  }
  function handleAmount() {
    dispatch(incrementByAmount(amount));
  }
  return (
   <div className='container'>
     <h1>Redux Counter</h1>
     <div className="counter-box">
        <button onClick={handleIncrement} className='btn'>+</button>
        <p className='count-display'>Count: {count}</p>
        <button onClick={handleDecrement} className='btn'>-</button>
        <button onClick={handleResset} className='btn reset'>Reset</button>
     </div>

      <div className='input-section'>
        <input
          type='number'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder='Enter amount'
        />
        <button onClick={handleAmount} className='btn amount-btn'>
          Increment by amount
        </button>
      </div>
    
   
   </div>
  )
}

export default App


// Steps
// Create store
// wrap App component under Provider
// Create slice
// register reducer in store