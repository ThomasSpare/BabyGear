import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./api/axiosDefaults"
import HomePage from "./containers/HomePage";
import CoachArea from "./containers/CoachArea";
import DashboardPage from "./containers/DashboardPage";
import ProfilePage from "./containers/ProfilePage";
import Learn from "./containers/Learn";
import "./App.css";
import Strollers from "./containers/Strollers";
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