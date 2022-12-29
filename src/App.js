import React from 'react';
import logo from './images/logo.png';
import userImg from './images/admin.jpg'
import backProfileImg from './images/timeline-1.jpg';
import userAvatar from './images/user-avatar.jpg';
import './App.css';
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className='app-wrapper'>
        <Header/>
        <Content/>
        <Footer/>
    </div>
  );
}

export default App;
