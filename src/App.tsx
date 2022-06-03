import React, { useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AdminRoutes } from "./config/routes";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import { useAppSelector } from "./hooks/useAppSelector";
import { userSelector } from "./redux/auth/selectors";
import { LocalStorage } from "./utils/LocalStorage";
import Topics from "./pages/Topics";
import Members from "./pages/Members";
import EditTopic from "./pages/Topic";
import NoMatch from "./pages/NoMatch";

const App: React.FC = () => {
  const user = useAppSelector(userSelector);
  const token = LocalStorage.getToken();
  useEffect(() => {}, [token, user]);

  return (
    <Router>
      <Routes>
        {!user && !token ? (
          <>
            <Route path="*" element={<Login />} />
            <Route path={AdminRoutes.SignUp} element={<SignUp />} />
            <Route
              path={AdminRoutes.ResetPassword}
              element={<ResetPassword />}
            />
          </>
        ) : (
          <>
            <Route
              path={AdminRoutes.ResetPassword}
              element={<ResetPassword />}
            />
            <Route path={AdminRoutes.Members} element={<Members />} />
            <Route path={AdminRoutes.Topics} element={<Topics />} />
            <Route
              path={AdminRoutes.Login}
              element={<Navigate replace to={AdminRoutes.Topics} />}
            />
            <Route
              path={AdminRoutes.SignUp}
              element={<Navigate replace to={AdminRoutes.Topics} />}
            />
            <Route path="topic/:action/:id" element={<EditTopic />} />
            <Route path="topic/:action" element={<EditTopic />} />
            <Route path="*" element={<NoMatch />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
