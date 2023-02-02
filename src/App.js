import './App.css';
import Login from './components/login'
import Signup from './components/signup'
import Homepage from './components/homepage'
import Mainpage from './components/mainpage'
import Nominee from './components/Nominee Info/nominee';
import { Routes, Route } from 'react-router-dom'
import Form from './controller/form'

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
       <Route path="/mainpage" element={<Mainpage />} />
        <Route path="/nomineeDetail" element={<Nominee />} />
        {/* <Route path="/form" element={<Form />} /> */}
      </Routes>
    </>
  );
}

export default App;
