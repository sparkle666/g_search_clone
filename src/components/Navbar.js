import { Link } from "react-router-dom";
import Search from "./Search";

const Routes = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="p-10 flex flex-wrap pb-0 sm:justify-between items-center border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-between space-x-5 items-center w-screen">
        <Link>
          <p className="text-2xl bg-blue-500 font-bold py-3 px-3 rounded text-white dark:bg-gray-500 dark:text-white">
            Google Search 🔎
          </p>
        </Link>
        <button className="border-0 hover:shadow-lg dark:text-white dark:border-none rounded-full text-xl bg-white px-5 py-2 dark:bg-gray-500 font-bold" onClick={() => setDarkTheme(!darkTheme)}>
          {darkTheme ? "Dark 💡" : "Light 🌙"}
        </button>
      </div>
      <Search />
    </div>
  );
};

export default Routes;
