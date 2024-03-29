import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults"
import { useCurrentUser } from "./contexts/CurrentUserContext";
import HomePage from "./containers/HomePage";
import CoachArea from "./containers/CoachArea";
import MissionPage from "./containers/MissionPage";
import Learn from "./containers/Learn";
// import ProfilePage from "./profiles/ProfilePage";
import "./App.css";
import Strollers from "./containers/Strollers";
import Seats from "./containers/Seats";
import Bottles from "./containers/Bottles";
import ReviewCreateForm from "./reviews/ReviewCreateForm";
// import ReviewPage from "./reviews/ReviewPage";
import ReviewsPage from "./reviews/ReviewsPage";
import ReviewEditForm from "./reviews/ReviewEditForm";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import styles from "../src/styles/App.module.css";
import ProfilePage from "./profiles/ProfilePage";



function App() {
  const currentUser = useCurrentUser();
  // const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
          <Switch>
              <Route exact path="/" render={() => <HomePage />} />
              <Route exact path="/coaching" render={() =><CoachArea />} />
              {/* <Route exact path="/dashboard" render={() =><DashboardPage />} /> */}
              <Route exact path="/signup" render={() => <SignUpForm />} />
              <Route exact path="/dj-rest-auth/login/" render={() => <SignInForm />} />
              <Route exact path="/mission" render={() => <MissionPage />} />
              <Route exact path="/learn" render={() => <Learn />} />
              <Route exact path="/strollers" render={() => <Strollers />} />
              <Route exact path="/seats" render={() => <Seats />} />
              <Route exact path="/bottles" render={() => <Bottles />} />
              <Route exact path="/reviews/create" render={() => <ReviewCreateForm />} />
              <Route exact path="/reviews" render={() => <ReviewsPage />} />
              <Route exact path="/posts/:id/edit" render={() => <ReviewEditForm />} />
              <Route exact path="/profiles/profiles/"{...`${currentUser?.pk}`} render={() => <ProfilePage />} />
              <Route
            exact
            path="/profiles/:id/edit/username"
            // render={() => <UsernameForm />}
          />
          <Route
            exact
            // path="/profiles/"{...`${profile_id}`}"/edit/password"
            // render={() => <UserPasswordForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit"
            // render={() => <ProfileEditForm />}
          />

          </Switch>
    </div>
  );
}

export default App;       