import React from "react";
import { HashRouter,BrowserRouter, Switch, Route } from "react-router-dom";

import Blog from "./Containers/Blog"
import BlogPost from "./Containers/BlogPost";
import Home from "./Containers/Home";
// var createBrowserHistory = require("history").createBrowserHistory;
// const history = createBrowserHistory();

const Router = () => {
  return (
    <BrowserRouter>
    {/* <HashRouter history={history}> */}
      <Switch>
      <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/blog/:title/:issueNumber" component={BlogPost}/>
      </Switch>
    {/* </HashRouter> */}
    </BrowserRouter>
  );
};

export default Router;
