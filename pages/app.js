import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import DiscountBanner from './DiscountBanner';
import AssetsPage from './AssetsPage';
import useNavigation from '../hooks/navigation';
import NavBar from "./NavBar";

function App() {
  

  let Component
  switch(window.location.pathname){
    case "/":
      Component = DiscountBanner
      break
    case "/assets":
      Component = AssetsPage
      break
    case "/discover":
      Component = Discover
  }
  
  return (
  <>
  <NavBar />
  <Component />
  </>
  );
}



export default App;
