import { useState } from 'react'
import './App.css'

function App () {
  const [enableTrack, setEnableTrack] = useState(false)

  const cursorDecoratorStyle = {
    width: '20px',
    height: '20px',
    backgroundColor: 'red',
    borderRadius: '50%',
    position: 'absolute',
    top: '-10px',
    left: '-10px',
    translate: '50px 50px'
  }

  return (
    <>
      <h1>Cursor tracking demo</h1>
      <div className="cursor-decorator" style={cursorDecoratorStyle}/>
      <button onClick={() => setEnableTrack(!enableTrack)}>{enableTrack ? 'Disable' : 'Enable'} cursor tracking</button>
    </>
  )
}

export default App
