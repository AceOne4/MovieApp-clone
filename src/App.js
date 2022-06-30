import { BrowserRouter as Router, Switch } from "react-router-dom";
import useAuthListenner from "./hook/useAuthListenner";
import * as ROUTES from "./Constant/Routes";
import Browse from "./Pages/Browse";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import { ISUSerRedirect, ProtectedRoute } from "./helpers/Route";

function App() {
  const { user } = useAuthListenner();

  return (
    <Router>
      <Switch>
        <ISUSerRedirect
          user={user}
          loginpath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}
          exact
        >
          <SignIn />
        </ISUSerRedirect>

        <ISUSerRedirect
          user={user}
          loginpath={ROUTES.BROWSE}
          path={ROUTES.SIGN_UP}
          exact
        >
          <SignUp />
        </ISUSerRedirect>

        <ProtectedRoute user={user} path={ROUTES.BROWSE} exact>
          <Browse />
        </ProtectedRoute>
        <ISUSerRedirect
          user={user}
          loginpath={ROUTES.BROWSE}
          path={ROUTES.HOME}
        >
          <Home />
        </ISUSerRedirect>
      </Switch>
    </Router>
  );
}

export default App;
