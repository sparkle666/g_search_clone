import { useContext, createContext, useState } from "react";

const ResultsContext = createContext();
const baseURL = "https://google-search3.p.rapidapi.com/api/v1";
const ResultsContextProvider = ({ children }) => {
  // A results to hold the array of results, a loading to check if req is loadinf and a term to serach for a particular saercb term
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("Js Mastery");

  const getResults = async (term) => {
    setIsLoading(true);

    const response = await fetch(`${baseURL}${term}`, {
      method: "GET",
      headers: {
        'x-user-agent': 'desktop',
        'x-rapidapi-host': 'google-search3.p.rapidapi.com',
        'x-rapidapi-key': '961a0eee00msh1fc236b67b9e866p1c3974jsn0199a8bbfa9b'
      }
    });
    const data = await response.json();
    console.log(response.status)
    setResults(data); // pass the data into results
    setIsLoading(false); // stop loading after succesfull data retireval
  };
  return (
    <ResultsContext.Provider value={{ results, isLoading, searchTerm, setSearchTerm, getResults }}>
      {children}
    </ResultsContext.Provider>
  );
};

export default ResultsContextProvider;
// Use the context that was created
export const useResultsContext = () => useContext(ResultsContext);
