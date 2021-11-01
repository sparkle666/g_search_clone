import Navbar from "./components/Navbar" 
import Footer from "./components/Footer" 
import Routes from "./components/Routes" 
import {useState} from 'react'

function App() {
  const [darkTheme, setDarkTheme] = useState(false) // set it to false that will be chanhed later from a btn click
  
  // const testFetch = () => {
  //   fetch('https://google-search3.p.rapidapi.com/api/v1/search/q=elon+musk&num=100', {
  //     method: "GET",
  //     headers: {
  //       'x-user-agent': 'desktop',
  //       'x-rapidapi-host': 'google-search3.p.rapidapi.com',
  //       'x-rapidapi-key': '961a0eee00msh1fc236b67b9e866p1c3974jsn0199a8bbfa9b'
  //     }
  //   })
  //   .then((res) => {
  //     console.log(res.statusText)
  //   })
  // }
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

