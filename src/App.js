import React from "react";
import Home from "./Compo/Home.jsx";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Compo/Navbar.jsx";
import NavCaterogy from "./Compo/NavCaterogy.jsx";
import TopNav from "./Compo/TopNav.jsx";
import SearchNews from "./Compo/SearchNews.jsx";
import NewsCategorySearch from './Compo/NewsCategorySearch.jsx';
import Footer from './Compo/Footer'


const App = () => {
  return (
    <>
    <TopNav />
      <Navbar />
      <NavCaterogy />
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path='/Search/:name' children={<SearchNews />}></Route>
        <Route exact path='/News/:name' children={<NewsCategorySearch />}></Route>

        
      </Switch>
      <Footer />
    </>
  );
};

export default App;
