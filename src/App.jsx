import { useState, useEffect } from 'react'
import './App.css'

function App () {
  const [enableTrack, setEnableTrack] = useState(false)
  const [cursorCoords, setCursorCoords] = useState({x: 0, y: 0})

  const cursorDecoratorStyle = {
    width: '20px',
    height: '20px',
    backgroundColor: 'red',
    borderRadius: '50%',
    position: 'absolute',
    top: '-10px',
    left: '-10px',
    translate: `${cursorCoords.x}px ${cursorCoords.y}px`,
    pointerEvents: 'none',
    opacity: '0.8'

  }

  useEffect(() => {
    //create function to set coords
    const supplyCoords = (event) => {
      //clientX and clientY
      setCursorCoords({x: event.clientX, y: event.clientY})
    }
    //check if enableTrack
    if(enableTrack){
      //add listener to get cursor coordenates
      window.addEventListener('pointermove', supplyCoords)
    }
    //unsubscribe the listener
    return () => window.removeEventListener('pointermove', supplyCoords)
    //Each time enableTrack value changes, useEffect will trigger
  },[enableTrack])

  return (
    <>
      <h1>Cursor tracking demo</h1>
      <div className="cursor-decorator" style={cursorDecoratorStyle}/>
      <div>
        <h3>Current mouse coordenates</h3>
        <p>X: {cursorCoords.x}, Y: {cursorCoords.y}</p>
      </div>
      <button onClick={() => setEnableTrack(!enableTrack)}>{enableTrack ? 'Disable' : 'Enable'} cursor tracking</button>
    </>
  )
}

export default App
