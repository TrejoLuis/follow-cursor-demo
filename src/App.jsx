import { useState } from 'react'
import './App.css'

function App () {
  const [enableTrack, setEnableTrack] = useState(false)

  return (
    <>
      <h1>Cursor tracking demo</h1>
      <button onClick={() => setEnableTrack(!enableTrack)}>{enableTrack ? 'Disable' : 'Enable'} cursor tracking</button>
    </>
  )
}

export default App
