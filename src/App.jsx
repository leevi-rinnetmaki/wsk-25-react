import './App.css';
import Home from './views/Home.jsx';
import Profile from './views/Profile.jsx';
import Upload from './views/Upload.jsx';
import Layout from './components/Layout.jsx';
import Single from './views/Single';
import {BrowserRouter, Routes, Route} from 'react-router';

const App = () => {
  const uni = String.fromCodePoint(0x30000);
  return (
    <>
      <h1>{uni}</h1>
      <h1>Mïnün sóvëllüs</h1>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="upload" element={<Upload />} />
            <Route path="single" element={<Single />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
