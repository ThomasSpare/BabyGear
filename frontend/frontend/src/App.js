import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./api/axiosDefaults"
import HomePage from "./containers/HomePage";
import CoachArea from "./containers/CoachArea";
import RegisterPage from "./containers/RegisterPage";
import LoginPage from "./containers/LoginPage";
import DashboardPage from "./containers/DashboardPage";
import ProfilePage from "./containers/ProfilePage";
import Learn from "./containers/Learn";
import "./App.css";
import Strollers from "./containers/Strollers";
import LogoutPage from "./containers/LogoutPage";
import Seats from "./containers/Seats";
import Bottles from "./containers/Bottles";
import Reviews from "./containers/Reviews";
import SignUpForm from "./pages/auth/SignUpForm";
import styles from "../src/styles/App.module.css"



function App() {
  return (
    <div className={styles.App}>
        <Router>          
              <Routes>
                  <Route exact path='/' element={<HomePage />} />
                  <Route path='/coaching' element={<CoachArea />} />
                  <Route path='/dashboard' element={<DashboardPage />} />
                  <Route path='/signup' element={<SignUpForm />} />
                  <Route path='/logout' element={<LogoutPage />} />
                  <Route path='/register' element={<RegisterPage />} />
                  <Route path='/profile' element={<ProfilePage />} />
                  <Route path='/learn' element={<Learn />} />
                  <Route path='/strollers' element={<Strollers />} />
                  <Route path='/seats' element={<Seats />} />
                  <Route path='/bottles' element={<Bottles />} />
                  <Route path='/reviews' element={<Reviews />} />
              </Routes>
        </Router> 
    </div>
  );
};

export default App;       