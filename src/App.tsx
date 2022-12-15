import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";

function App() {
  const { isLoading, error } = useAuth0();

  return (
    <main>
      <div className="container text-center my-20">
        <h1 className="text-5xl mb-5 font-bold">Auth0 login</h1>

        {error && <p>Authentication Error</p>}
        {!error && isLoading && <p>Loading...</p>}

        {!error && !isLoading && (
          <>
            <LoginButton />
            <LogoutButton />
            <Profile />
          </>
        )}
      </div>
    </main>
  );
}

export default App;
