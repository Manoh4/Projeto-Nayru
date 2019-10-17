import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Chatbot from './Chatbot';

function App() {
  return (
    <div className="conteudo">
      <Header/>
      <Home/>
      <Chatbot/>
      <Footer/>
    </div>
  );
}

export default App;
