import { useContext, createContext, useState} from 'react'

const ResultsContext = createContext()
const baseURL = ""
const ResultsContextProvider = ({children}) => {
    // A results to hold the array of results, a loading to check if req is loadinf and a term to serach for a particular saercb term
    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")

    const getResults = async (term) => {
        setIsLoading(true)

        const response = await fetch(`${baseURL}${term}`)
        const data = await  response.json()

        setResults(data) // pass the data into results
        setIsLoading(false) // stop loading after succesfull data retireval
    }
    return ( 
        <ResultsContext.Provider value = {{results, isLoading, searchTerm, setSearchTerm, getResults}}>
            {children}
        </ResultsContext.Provider>
     );
}
 
export default ResultsContextProvider;
// Use the context that was created
export default useResultsContext = useContext(ResultsContext) 