import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('none');

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap shadow-xl bg-white rounded px-3 py-2">
          <button className='outline-none px-4 py-1 mx-2 rounded-full text-white shadow-lg' style={{backgroundColor: 'red'} } onClick={(e)=>{setColor(e.target.innerText)}}>Red</button>
          <button className='outline-none px-4 py-1 mx-2 rounded-full text-white shadow-lg' style={{backgroundColor: 'blue'}} onClick={(e)=>{setColor(e.target.innerText)}}>blue</button>
          <button className='outline-none px-4 py-1 mx-2 rounded-full shadow-lg' style={{backgroundColor: 'yellow'}} onClick={(e)=>{setColor(e.target.innerText)}}>yellow</button>
          <button className='outline-none px-4 py-1 mx-2 rounded-full text-white shadow-lg' style={{backgroundColor: 'green'}} onClick={(e)=>{setColor(e.target.innerText)}}>green</button>
          <button className='outline-none px-4 py-1 mx-2 rounded-full text-white shadow-lg' style={{backgroundColor: 'black'}} onClick={(e)=>{setColor(e.target.innerText)}}>black</button>
          <button className='outline-none px-4 py-1 mx-2 rounded-full text-white shadow-lg' style={{backgroundColor: 'grey'}} onClick={(e)=>{setColor(e.target.innerText)}}>grey</button>
          <button className='outline-none px-4 py-1 mx-2 rounded-full text-white shadow-lg' style={{backgroundColor: 'orange'}} onClick={(e)=>{setColor(e.target.innerText)}}>orange</button>
          <button className='outline-none px-4 py-1 mx-2 rounded-full text-white shadow-lg' style={{backgroundColor: 'pink'}} onClick={(e)=>{setColor(e.target.innerText)}}>pink</button>
        </div>
      </div>
      
    </div>
  )
}

export default App
