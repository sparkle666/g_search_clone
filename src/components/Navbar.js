import { Link } from "react-router-dom";
import Search from "./Search";

const Routes = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to = '/'>
          <p className="lg:text-2xl text-sm font-semibold bg-blue-500 text-white py-1 px-1 rounded dark:bg-gray-50 dark:text-gray-900">
            Google Search 🔎
          </p>
        </Link>
        <button className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg" onClick={() => setDarkTheme(!darkTheme)}>
          {darkTheme ? "Dark 💡" : "Light 🌙"}
        </button>
      </div>
      <Search />
    </div>
  );
};

export default Routes;
