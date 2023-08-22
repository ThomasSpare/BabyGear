import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./containers/HomePage";
import CoachArea from "./containers/CoachArea";
import RegisterPage from "./containers/RegisterPage";
import LoginPage from "./containers/LoginPage";
import DashboardPage from "./containers/DashboardPage";
import ProfilePage from "./containers/ProfilePage";
import Learn from "./containers/Learn";
import "./App.css";





const App = () => {


  return (
    <div className="App">
        <Router>          
              <Routes>
                  <Route exact path='/' element={<HomePage />} />
                  <Route path='/coaching' element={<CoachArea />} />
                  <Route path='/dashboard' element={<DashboardPage />} />
                  <Route path='/login' element={<LoginPage />} />
                  <Route path='/register' element={<RegisterPage />} />
                  <Route path='/profile' element={<ProfilePage />} />
                  <Route path='/learn' element={<Learn />} />
              </Routes>
        </Router> 
    </div>
  );
};

export default App;       