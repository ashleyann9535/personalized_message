import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './components/Main';
import CreateMember from './components/CreateMember';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path = '/' element={<Main />} />
        <Route path = '/createMember' element={<CreateMember/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
