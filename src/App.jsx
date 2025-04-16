import './App.css';
import Home from './views/Home.jsx';
import Profile from './views/Profile.jsx';
import Upload from './views/Upload.jsx';
import Layout from './components/Layout.jsx';
import Single from './views/Single';
import {BrowserRouter, Routes, Route} from 'react-router';
import Login from './views/Login.jsx';
import Logout from './views/Logout.jsx';
import {UserProvider} from './contexts/UserContext';
import ProtectedRoute from './components/ProtectedRoute.jsx';

const App = () => {
  const uni = String.fromCodePoint(0x30000);
  return (
    <>
      <h1>{uni}</h1>
      <h1>Mïnün sóvëllüs</h1>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route
                path="profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="upload"
                element={
                  <ProtectedRoute>
                    <Upload />
                  </ProtectedRoute>
                }
              />
              <Route path="single" element={<Single />} />
              <Route path="login" element={<Login />} />
              <Route path="Logout" element={<Logout />} />
              <Route path="Upload" element={<Logout />} />
            </Route>
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  );
};
export default App;
