import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './styles/index.css';

import reportWebVitals from './reportWebVitals';

import { Home, Host, Listing, Listings, User, NotFound } from "./sections";

const client = new ApolloClient({
  uri: "/api"
});

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/host" element={<Host/>}/>
          <Route path="/listing/:id" element={<Listing/>}/>
          <Route path="/listings/:location?" element={<Listings/>}/>
          <Route path="/user/:id" element={<User/>}/>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
      </Router>
  )
};

render(
    <React.StrictMode>
      <ApolloProvider client={client}>
        <App/>
      </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
