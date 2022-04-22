import React, { useRef } from 'react';
import { useAppSelector } from '../app/hooks';
import { selectUser } from '../features/user/userSlice';
import { logoutFromApp } from '../features/user/logoutFromApp';
import Avatar from './Avatar';
import { Link } from 'react-router-dom';

function Header() {
  const user: any = useAppSelector(selectUser);
  const closeNavButton = useRef<HTMLButtonElement>(null);

  const closeNavigation = () => {
    closeNavButton.current?.click();
  };

  return (
    <div className="flex space-x-2">
      <div>
        <div
          className="offcanvas offcanvas-start fixed bottom-0 flex flex-col max-w-full bg-white invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 left-0 border-none w-60"
          id="navigationTarget"
          aria-labelledby="navigationLabel"
        >
          <div className="offcanvas-header flex items-center justify-between p-4 pb-0">
            <h5 className="offcanvas-title mb-0 leading-normal font-semibold" id="navigationLabel">
              Navigation 🔥
            </h5>
            <button
              type="button"
              className="btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-70 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              ref={closeNavButton}
            ></button>
          </div>

          <div className="offcanvas-body flex-grow overflow-y-auto overflow-x-hidden">
            <div className="flex flex-col justify-between h-full p-3 w-60 bg-white text-gray-800">
              <div className="space-y-3">
                <div className="flex-1">
                  <ul className="pt-2 pb-4 space-y-1 text-sm" onClick={() => closeNavigation()}>
                    <li className="rounded-sm hover:bg-gray-100 transition-colors">
                      <Link to="/">
                        <div className="flex items-center p-2 space-x-3 rounded-md">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-5 h-5 fill-current text-gray-600"
                          >
                            <path d="M469.666,216.45,271.078,33.749a34,34,0,0,0-47.062.98L41.373,217.373,32,226.745V496H208V328h96V496H480V225.958ZM248.038,56.771c.282,0,.108.061-.013.18C247.9,56.832,247.756,56.771,248.038,56.771ZM448,464H336V328a32,32,0,0,0-32-32H208a32,32,0,0,0-32,32V464H64V240L248.038,57.356c.013-.012.014-.023.024-.035L448,240Z"></path>
                          </svg>
                          <span>Home</span>
                        </div>
                      </Link>
                    </li>
                    <li className="rounded-sm hover:bg-gray-100 transition-colors" onClick={() => closeNavigation()}>
                      <Link to="/training-list">
                        <div className="flex items-center p-2 space-x-3 rounded-md">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-5 h-5 fill-current text-gray-600"
                          >
                            <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                          </svg>
                          <span>Trainings list</span>
                        </div>
                      </Link>
                    </li>
                    <li className="rounded-sm hover:bg-gray-100 transition-colors" onClick={() => logoutFromApp()}>
                      <div className="flex items-center p-2 space-x-3 rounded-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-5 h-5 fill-current text-gray-600"
                        >
                          <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                          <rect width="32" height="64" x="256" y="232"></rect>
                        </svg>
                        <span>Logout</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center p-2 mt-12 space-x-4 justify-self-end">
                <div className="w-12 h-12 rounded-lg overflow-hidden">
                  <Avatar />
                </div>
                <div>
                  <h2 className="text-lg font-semibold leading-tight">{user.displayName}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
