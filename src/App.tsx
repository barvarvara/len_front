import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import './App.scss';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router/>
      </BrowserRouter>

      <ToastContainer
        position='top-center'
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick={true}
      />
    </div>
  );
}

export default App;
