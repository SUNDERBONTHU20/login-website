import React, { useState } from "react";
import Routers from "./Components/Navigation/Routers";
import Login from "./Components/login-out/Login"; // Import the Login component
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SearchAppBar from './Components/Navbar/SearchAppBar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status
  const [darkMode, setDarkMode] = useState(false); // State to manage dark mode

  const handleLogin = () => {
    // Logic to handle successful login
    setIsLoggedIn(true);
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* Render Login component if not logged in */}
        {!isLoggedIn && <Login onLogin={handleLogin} />}
        {/* Render Routers component if logged in */}
        {isLoggedIn && (
          <>
            <SearchAppBar darkMode={darkMode} onDarkModeToggle={handleDarkModeToggle} />
            <Routers />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
