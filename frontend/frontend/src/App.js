import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults"
import HomePage from "./containers/HomePage";
import CoachArea from "./containers/CoachArea";
import DashboardPage from "./containers/DashboardPage";
import ProfilePage from "./containers/ProfilePage";
import Learn from "./containers/Learn";
import "./App.css";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import Strollers from "./containers/Strollers";
import Seats from "./containers/Seats";
import Bottles from "./containers/Bottles";
import Reviews from "./containers/Reviews";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import styles from "../src/styles/App.module.css";


function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
          <Switch>
              <Route exact path="/" render={() => <HomePage />} />
              <Route exact path="/coaching" render={() =><CoachArea />} />
              <Route exact path="/dashboard" render={() =><DashboardPage />} />
              <Route exact path="/signup" render={() => <SignUpForm />} />
              <Route exact path="/login" render={() => <SignInForm />} />
              <Route exact path="/profile" render={() => <ProfilePage />} />
              <Route exact path="/learn" render={() => <Learn />} />
              <Route exact path="/strollers" render={() => <Strollers />} />
              <Route exact path="/seats" render={() => <Seats />} />
              <Route exact path="/bottles" render={() => <Bottles />} />
              <Route exact path="/reviews" render={() => <Reviews />} />
          </Switch>
    </div>
  );
}

export default App;       