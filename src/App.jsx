import reactLogo from './assets/react.svg'
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import './App.css'

function App() {
  return (
      <div className='container'>
        <Navbar/>
        <Main/>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
  )
}

export default App
