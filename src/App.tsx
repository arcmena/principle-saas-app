import { Route, Routes } from "react-router-dom";

import { RequireAuth } from "@/components/auth/RequireAuth";
import { AuthProvider } from "@/components/auth/AuthContext";

import { LoginPage } from "@/pages/LoginPage";

import { globalStyles } from "@/styles/globalStyles";

function App() {
  globalStyles();

  return (
    <AuthProvider>
      <Routes>
        <Route>
          <Route
            path="/"
            element={
              <RequireAuth>
                <p>home</p>
              </RequireAuth>
            }
          />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
