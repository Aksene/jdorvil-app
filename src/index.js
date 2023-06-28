import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client"

// page imports
import Home from './Pages/Home';
import BookMe from './Pages/BookMe';
import ReviewDetails from './Pages/ReviewDetails';
import Category from './Pages/Category';
import Playground from './Pages/Playground';
import AboutMe from './Pages/AboutMe';
import ContactMe from './Pages/ContactMe';

// apollo client 
const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
    <Routes>
        <Route index element={<Home/>}/>
        <Route path={"about-me"} element={<AboutMe/>}/>
        <Route path={"book"} element={<BookMe/>}/>
        <Route path={"playground"} element={<Playground/>}/>
        <Route path={"contact-me"} element={<ContactMe/>}/>
        <Route path={"playground/details/:id"} element={<ReviewDetails/>}/>
        <Route path={"playground/category/:id"} element={<Category/>}/>
    </Routes>     
     </ApolloProvider>

  </BrowserRouter>
);