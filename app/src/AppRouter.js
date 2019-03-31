import React from "react";
import { Switch, Route } from "react-router-dom";
import AppUrls from './model/constants/AppUrls';
import Users from './views/users/Users';
import Home from './views/home/Home';
import About from './views/about/About';
import Contact from './views/contact/Contact';

const AppRouter = () => (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path={AppUrls.Home.Root} component={Home}/>
      <Route path={AppUrls.About.Root} component={About}/>
      <Route path={AppUrls.Contact.Root} component={Contact}/>
      <Route path={AppUrls.Users.Root} component={Users}/>
    </Switch>
);

export default AppRouter;