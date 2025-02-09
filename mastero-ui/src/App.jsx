import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DashboardPage from "./pages/DashboardPage";
import ArchivePage from "./pages/ArchivePage";
import AuthPage from "./pages/AuthPage";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import AppLoader from "./components/appLoader";
import AppAuthProvider from "./components/appAuthProvider";
function App() {
  const theme = createTheme({
    palette: {
      silver: {
        main: "#e6e8ec",
        light: "#e6e8ec",
        dark: "#e6e8ec",
        contrastText: "#e6e8ec",
      },

      primary: {
        main: "#0336FF",
        light: "#0336FF",
        dark: "#0336FF",
        contrastText: "#0336FF",
      },
    },
  });
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        
        <AppAuthProvider>
            <AppLoader>
            <BrowserRouter>
              <Routes>
                <Route exact path="/login" element={<AuthPage />} />
                <Route exact element={<ProtectedRoute />}>
                  <Route
                    exact
                    path="/:org_id/dashboard"
                    element={<DashboardPage />}
                  />
                  <Route exact path="/:org_id/archive" element={<ArchivePage />} />
                  <Route exact path="/organizations" element={<DashboardPage />} />
                  <Route
                    exact
                    path="/:org_id/collection"
                    element={<ArchivePage />}
                  />
                  <Route
                    exact
                    path="/:org_id/collection/:collection_id"
                    element={<ArchivePage />}
                  />
                  <Route path="*" element={<Navigate to="/123/dashboard" replace />} />
                </Route>
                <Route />
              </Routes>
            </BrowserRouter>
            </AppLoader>
        </AppAuthProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
