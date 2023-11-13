import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BMICalculatorComponent from './BMICalculatorComponent'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://instagram.fbkk12-1.fna.fbcdn.net/v/t51.2885-19/400937025_316016621194057_6619054378087514746_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fbkk12-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=0t_yGHoaht8AX8sDqAI&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfA-AmULLY2LEdiVSpbbFEpNUjXf6VS4fI8QM_RIhHUfaw&oe=6555ED46&_nc_sid=8b3546" target="_blank">
          <img src={"https://cdn.discordapp.com/attachments/1079953929359589386/1173530188211040349/400937025_316016621194057_6619054378087514746_n.jpg?ex=65644a28&is=6551d528&hm=5bc5aa99380d9439315a2ed28423f6410c9f578ee4ae9ca5b790557154ce560b&"} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="App">
      <BMICalculatorComponent />
    </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
