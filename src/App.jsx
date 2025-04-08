import { Route } from 'react-router-dom';
import './App.css';
import Greeting from './Greeting.jsx';
import Home from './views/Home.jsx';
const App = () => {
  return (
   <>
    {/* <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/view/:id" element={<SingleView />} />
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router> */}
    <Home/>
   </>
  
  );
};
export default App;