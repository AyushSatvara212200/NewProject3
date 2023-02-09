import './App.css';
import Login from './components/login'
import Signup from './components/signup'
import Homepage from './components/homepage'
import Mainpage from './components/mainpage'
import AddMember from './components/Nominee Info/addMember';
import { Routes, Route } from 'react-router-dom'
import PersonalDetail from './components/Nominee Info/nomineeDetailPage/personalDetail';
import AccountShowDetail from './components/Account/accountShowDetail'
import AccountNomineeDetail from './components/Account/accountNomineeDetail'

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mainpage" element={<Mainpage />} />
        <Route path="/addmember" element={<AddMember />} />
        <Route path="/personalDetail" element={<PersonalDetail/>} />
        <Route path="/account/personal" element={<AccountShowDetail />} />
        <Route path="/account/nominee" element={<AccountNomineeDetail />} />
      </Routes>
    </>
  );
}

export default App;
