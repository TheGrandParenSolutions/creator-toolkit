import { Button } from '@mantine/core'
import './App.css'

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        height: '100vh',
      }}
    >
      <h1
        style={{
          color: 'transparent',
          background: 'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)',
          backgroundClip: 'text',
        }}
      >
        Coming soon.....
      </h1>
      <span
        style={{
          color: 'grey',
        }}
      >
        Powered by Team JJ.
      </span>
      <Button>Hello</Button>
    </div>
  )
}

export default App
