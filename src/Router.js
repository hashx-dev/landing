import React from "react";
import { HashRouter,BrowserRouter, Switch, Route } from "react-router-dom";
import MainHeader from "./Components/MainHeader"
import  Footer  from "./Components/Footer";
import Blog from "./pages/Blog"
import BlogPost from "./pages/BlogPost";
import Home from "./pages/Home";
// var createBrowserHistory = require("history").createBrowserHistory;
// const history = createBrowserHistory();

const Router = () => {
  return (
    
    <BrowserRouter>
    {/* <HashRouter history={history}> */}
    <MainHeader />
      <Switch>
      <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/blog/:title/:issueNumber" component={BlogPost}/>
      </Switch>
    {/* </HashRouter> */}
    <Footer />
    </BrowserRouter>
    
  );
};

export default Router;
