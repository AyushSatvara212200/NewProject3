import "./App.css";
import Login from "./components/login";
import Signup from "./components/signup";
import Homepage from "./components/homepage";
import Mainpage from "./components/mainpage";
import AddMember from "./components/Nominee Info/addMember";
import { Routes, Route } from "react-router-dom";
import PersonalDetail from "./components/Nominee Info/nomineeDetailPage/personalDetail";
import AccountShowDetail from "./components/Account/accountShowDetail";
import AccountNomineeDetail from "./components/Account/accountNomineeDetail";
import LineChart from "./components/linechart";
import BarChart from "./components/barchart";
import Transactions from "./components/transactions.jsx";
import Posts from "./components/posts.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mainpage" element={<Mainpage />} />
        <Route path="/addmember" element={<AddMember />} />
        <Route path="/personalDetail" element={<PersonalDetail />} />
        <Route path="/account/personal" element={<AccountShowDetail />} />
        <Route path="/account/nominee" element={<AccountNomineeDetail />} />
        <Route path="/charts/linechart" element={<LineChart />} />
        <Route path="/charts/barchart" element={<BarChart />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </>
  );
}

export default App;
