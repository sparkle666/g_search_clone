import {NavLink} from 'react-router-dom'
const Links = () => {
    const links = [
        {url: "/search", text: "🔎 Search"},
        {url: "/images", text: "📷 Images"},
        {url: "/news", text: "📰 News"},
        {url: "/Videos", text: "📺 Videos"}
    ]
    return ( 
        <div className = "flex sm:justify-around justify-between mt-4 items-center">
            {links.map(({url, text}) => (
                <NavLink to={url} className="m-2 mb-0" activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2">
                    {text}
                </NavLink>
            ))}
        </div>
     );
}
 
export default Links;