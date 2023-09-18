import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Introduction from './components/Introduction/Introduction';
import Courses from './components/Courses/Courses';
import EpicMoments from './components/EpicMoments/EpicMoments';
import Faq from './components/Faq/Faq';
import OutlineWrapper from './components/OutlineWrapper/OutlineWrapper';
import './App.css';
import Signup from './components/Signup/Signup';
import FloatingButton from './components/FloatingButton/FloatingButton';
import 'font-awesome/css/font-awesome.min.css';  // Make sure this path is correct
import { useState, useEffect } from 'react';
import MainPage from './components/MainPage/MainPage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
 
  
  return (
    <Router>
      <div className="App">
       <Navbar/> {/* Show sidebar only if isSidebarOpen is true */}
        <FloatingButton />
        <Routes>
          <Route path="/" element={
            <>
              <MainPage />
              <OutlineWrapper><Courses /></OutlineWrapper>
              <OutlineWrapper><EpicMoments /></OutlineWrapper>
            </>
          } />
          <Route path="/faq" element={<OutlineWrapper><Faq /></OutlineWrapper>} />
          <Route path="/signup" element={<OutlineWrapper><Signup /></OutlineWrapper>} />
          <Route path="/aboutme" element={<OutlineWrapper><Introduction /></OutlineWrapper>} />
        </Routes>
       <Footer />
      </div>
    </Router>
  );
}

export default App;
