import '../scss/App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainForm from './Form';
import AcceptPage from './Accept';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainForm/>}/>
        <Route path='/accept' element={<AcceptPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
