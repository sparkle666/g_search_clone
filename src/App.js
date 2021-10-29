import Navbar from "./components/Navbar" 
import Footer from "./components/Footer" 
import Routes from "./components/Routes" 
import {useState} from 'react'

function App() {
  const [darkTheme, setDarkTheme] = useState(false)
  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-50">
        <h2>App</h2>
      </div>
    </div>
  );
}    

export default App;
