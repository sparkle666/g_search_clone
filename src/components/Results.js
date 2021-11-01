import {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import ReactPlayer from "react-player"
import {useResultsContext} from "../contexts/ResultsContextProvider"
import Loading from "./Loading"

const Results = () => {
    const {results, isLoading, searchTerm, setSearchTerm, getResults} = useResultsContext()
    const location = useLocation() // this gets us the current url location e.g /news, /images

    useEffect(() => {
        // getResults('/search/q=elon+musk&num=100&lr=lang_en&hl=en&cr=US')
        // Check if the there is a search term
        if(searchTerm){
            if(location.pathname === "videos"){ // Checks if the url is videos then add videos to query
                getResults(`/search/q=${searchTerm} videos`)
            }
            else{ //else for any other path, insert the dynamic url path and the corresponding query term
                getResults(`${location.pathname}/q=${searchTerm}&num=40&lr=lang_en&hl=en&cr=US`)
            }
        }
        
    }, [searchTerm, location.pathname]) // if any of these changes, re run ueseffect

    if (isLoading) return <Loading />
    
    switch(location.pathname){
        case "/search":
            return (
                <div className="flex flex-wrap justify-between space-y-4 py-6 sm:px-56">
                    {results?.results?.map(({link, title}, index) => (
                        <div key = {index} className="md:w-2/5 w-full">
                            <a href = {link}>
                                <p className="text-sm">
                                    {link.length > 30 ? link.substring(0, 30): link}
                                </p>
                                <p className="text-lg hover:underline">
                                    {title}
                                </p>
                            </a>
                        </div>
                    ))}
                </div>
            )
        case "/news":
            return "news"
        case "/images":
            return (// if path is image then map through the image_reults and destructure the image and link objects
                <div className="flex flex-wrap justify-center items-center">
                    {results?.image_results?.map(({image, link: {href, title}}) => (
                        <a href = {href} className="sm:p-3 p-5">
                            <img src={image?.src} alt ={image?.alt} loading="lazy"/>
                            <p className="w-36 break-words text-sm mt-2">
                                {title}
                            </p>
                        </a>
                    ))}
                </div>
            )
        case "/videos":
            return "videos"
        default:
            return "error"
    }
}
 
export default Results;