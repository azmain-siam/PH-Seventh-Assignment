const Header = () => {
  return (
    <header>
      <nav className="my-3">
        <div className="navbar bg-white">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex="0"
                role="button"
                className="p-2 mr-1 mt-[2px] -ml-2 hover:bg-slate-100 rounded-full lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex="0"
                className="menu menu-sm dropdown-content mt-3 -ml-2 space-y-1 z-[1] p-3 shadow-lg bg-white rounded-box w-44"
              >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Recipes</a>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Search</a>
                </li>
                <li>
                  <div className="flex justify-between border hover:border-slate-500">
                    <input
                      type="text"
                      placeholder="Search"
                      className="w-full h-full outline-none placeholder:text-dark-color"
                    ></input>
                    <i className="fa-solid fa-magnifying-glass text-dark-color text-base cursor-pointer"></i>
                  </div>
                </li>
              </ul>
            </div>
            <h1 className="text-2xl lg:text-3xl font-bold  cursor-default text-[#131318]">
              FlavorVerse
            </h1>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="flex gap-10 text-base font-medium text-dark-color">
              <li className="hover:text-[#40be8a] cursor-pointer duration-200">
                <a>Home</a>
              </li>
              <li className="hover:text-[#40be8a] cursor-pointer duration-200">
                <a>Recipes</a>
              </li>
              <li className="hover:text-[#40be8a] cursor-pointer duration-200">
                <a>About</a>
              </li>
              <li className="hover:text-[#40be8a] cursor-pointer duration-200">
                <a>Search</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end space-x-5">
            <div className="flex gap-2">
              <label className="input input-bordered hidden rounded-full lg:flex items-center gap-2">
                <input type="text" className="grow" placeholder="Search" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
              <div className="md:w-12 w-10 md:h-12 h-10 bg-[#0BE58A] rounded-full cursor-pointer flex items-center justify-center">
                <i className="fa-regular fa-user text-lg md:text-xl"></i>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
