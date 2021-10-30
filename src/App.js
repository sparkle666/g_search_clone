import Navbar from "./components/Navbar" 
import Footer from "./components/Footer" 
import Routes from "./components/Routes" 
import {useState} from 'react'

function App() {
  const [darkTheme, setDarkTheme] = useState(false) // set it to false that will be chanhed later from a btn click
  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-50 min-h-screen">
        <Navbar darkTheme = {darkTheme} setDarkTheme = {setDarkTheme} />
        <Routes />
        <Footer />
      </div>
    </div>
  );
}    

export default App;
