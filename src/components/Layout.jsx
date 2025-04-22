import {BrowserRouter, Routes, Route, Link, Outlet} from 'react-router';
import {useUserContext} from '../hooks/contextHooks';
import {useEffect} from 'react';

export const Layout = () => {
  const user = true;
  const {handleAutoLogin} = useUserContext();
  useEffect(() => {
    handleAutoLogin();
  }, []); // Call handleAutoLogin when the component mounts
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {user ? (
            <>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/upload">Upload</Link>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
