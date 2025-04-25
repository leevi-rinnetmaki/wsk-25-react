import {BrowserRouter, Routes, Route, Link, Outlet} from 'react-router';
//import {useUserContext} from '../hooks/contextHooks';
//import {useEffect} from 'react';

export const Layout = () => {
  const user = false;
  //const {handleAutoLogin} = useUserContext();
  /*
  useEffect(() => {
    handleAutoLogin();
  }, []); // Call handleAutoLogin when the component mounts
  */
  return (
    <div>
      <nav>
        <ul className="list-none overflow-hidden bg-stone-900 flex justify-end gap-2">
          <li>
            <Link className="block text-stone-50 text-center p-4 hover:bg-stone-600" to="/">Home</Link>
          </li>
          {user ? (
            <>
              <li>
                <Link className="block text-stone-50 text-center p-4 hover:bg-stone-600" to="/profile">Profile</Link>
              </li>
              <li>
                <Link className="block text-stone-50 text-center p-4 hover:bg-stone-600" to="/upload">Upload</Link>
              </li>
              <li>
                <Link className="block text-stone-50 text-center p-4 hover:bg-stone-600" to="/logout">Logout</Link>
              </li>
            </>
          ) : (
            <li>
              <Link className="block text-stone-50 text-center p-4 hover:bg-stone-600" to="/login">Login</Link>
            </li>
          )}

        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
