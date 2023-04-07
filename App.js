import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/Login'
import Register from './pages/Register'
import Aos from 'aos';
import "aos/dist/aos.css";
import Testing from './pages/Testing'
import Dashboard from './pages/dashboard';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Profile from './pages/Profile';
import Home from './pages/Home';
import { useEffect } from 'react';
import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'
// import Navbar from './components/Navbar'

function App() {

  const [theme, colorMode] = useMode();
  useEffect(() => {
    Aos.init({ duration: 500, once: false });
  }, []);

  return (
    <ColorModeContext.Provider value={colorMode}>
     <ThemeProvider theme={theme}>
     <CssBaseline />
    <div className="App">
      <Router>
        
      <Routes>
        {/* <Route exact path="/" element={}/> */}
        {/* <Route path="/profile" element={<Profile/>}/> */}
        <Route path="/testing" element={<Testing/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
