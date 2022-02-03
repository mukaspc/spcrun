import React from 'react';
import Sidenav from './Sidenav';
import Logo from './Logo';
import Avatar from './Avatar';
import { logoutFromApp } from '../features/user/logoutFromApp';

function Header() {
  return (
    <>
      <nav className="relative w-full flex flex-wrap items-center justify-between pt-4 pb-2 text-gray-500 navbar navbar-light">
        <div className="container-fluid w-full flex flex-wrap items-center justify-between pr-4 pl-2">
          <div className="flex items-center">
            <button
              className="navbar-toggler text-gray-500 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 560 512"
                className="w-5 h-5 fill-current text-gray-800"
              >
                <rect width="400" height="50" x="80" y="96"></rect>
                <rect width="560" height="50" x="0" y="240"></rect>
                <rect width="400" height="50" x="80" y="384"></rect>
              </svg>
            </button>

            <Logo optionalClass={'ml-4'} />
          </div>

          <div className="flex items-center relative">
            <div className="dropdown relative">
              <a
                className="dropdown-toggle flex items-center hidden-arrow rounded-full overflow-hidden bg-gray-300"
                href="#"
                id="dropdownMenuButton2"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ height: '30px', width: '30px' }}
              >
                <Avatar />
              </a>
              <ul
                className="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0"
                aria-labelledby="dropdownMenuButton2"
              >
                <li onClick={() => logoutFromApp()}>
                  <a
                    className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    href="#"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <Sidenav />
    </>
  );
}

export default Header;
