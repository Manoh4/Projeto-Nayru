import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Chatbot from './Chatbot';
import {Provider} from 'react-redux' 
import store from './store';


function App() {
  return (
    <Provider store={store}>
      <div className="conteudo">
        <Header/>
        {/* <Home/> */}
        <Chatbot/>
        <Footer/>
      </div>
    </Provider>
  );
}

export default App;
