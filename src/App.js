import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import Home from "./Components/Home";
import SearchMedicine from "./Components/MedicineComp/functions/searchMedicine";
// import RemoveMedicine from "./components/MedicineComp/functions/removeMedicine";
import Top_bar from "./topbar";
// import MyPage from "./components/MyPage/MyPage";
import TakeMedicine from "./Components/MedicineComp/takeMedicine";
import CheckCurrentProgress from "./Components/MedicineComp/checkCurrentProgress";
import MyPage from "./Components/MyPageComp/MyPage";
import Login from "./Components/Login";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <div className="all-pages">
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <Top_bar />
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<CheckCurrentProgress />} />
            <Route path="/med/mypage" element={<TakeMedicine />} />
            <Route path="/med/add" element={<SearchMedicine />} />
            <Route path="/mypage" element={<MyPage />} />
          </Routes>
        </Router>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
