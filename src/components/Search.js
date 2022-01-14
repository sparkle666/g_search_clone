import Links from "./Links";
import {useState, useEffect} from 'react'
import {useDebounce} from 'use-debounce'
import {useResultsContext} from '../contexts/ResultsContextProvider'

const Search = () => {
  const [text, setText] = useState('') // create a state to handle search text
  const {setSearchTerm} = useResultsContext() // pull out the setsearch term from the provider
  const [debouncedValue] = useDebounce(text, 600) // Wait for 300miliseconds for text to change
  useEffect(() => {
    if (debouncedValue){
      setSearchTerm(debouncedValue) // Set the search value as debounce
    }
  }, [debouncedValue])
  return (
    <div className='relative sm:ml-48 sm:-mt-10 md:ml-72 mt-2'>
      <input 
        type = "text"
        value = {text}
        className= "sm:w-96 w-80 border shadow-sm rounded-full text-black p-2 hover:shadow-lg outline-none"
        placeholder="Search Google here"
        onChange = {(e)=> setText(e.target.value)}
      />
      <Links />
    </div>
  );
};

export default Search;
