import { Route, Redirect } from "react-router-dom";

export const ISUSerRedirect = function ({
  user,
  loginpath,
  children,
  ...resprosp
}) {
  return (
    <Route
      {...resprosp}
      render={() => {
        if (!user) {
          return children;
        }
        if (user) {
          return (
            <Redirect
              to={{
                pathname: loginpath,
              }}
            />
          );
        }
        return null;
      }}
    />
  );
};

export const ProtectedRoute = function ({ user, children, ...resprosp }) {
  return (
    <Route
      {...resprosp}
      render={({ location }) => {
        if (user) {
          return children;
        }
        if (!user) {
          return (
            <Redirect
              to={{
                pathname: "singin",
                state: { from: location },
              }}
            />
          );
        }
        return null;
      }}
    />
  );
};
