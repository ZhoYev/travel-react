import React from 'react'
import './app.css'
import NavBarTop from './Components/Navbar/NavBarTop'
import Home from './Components/Home/Home'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
      <NavBarTop />
      <Home />
      <Main />
      <Footer />
    </>
  );
}

export default App;
