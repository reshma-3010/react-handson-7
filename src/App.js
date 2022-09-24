
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Students from './components/Students';
import ContactUs from './components/ContactUs';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Students' element={<Students/>}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
