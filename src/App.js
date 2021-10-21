// import React, { Fragment, useEffect, useState } from 'react';
// import { firebase, db } from './firebase.config';

import React, { Fragment, useEffect } from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { UseUserDataContext } from './context/userContext';
import { firebase, db } from './firebase.config';

import Home from './pages/Home'; // Importa el modulo home
import About from './pages/About';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import Comments from './pages/Comments';
import Contact from './pages/Contact';
import LogIn from './pages/LogIn';
import PageNotFound from './pages/PageNotFound';
import SignUp from './pages/SignUp';
import WriteComment from './pages/WriteComment'

const App = () => {
  const { setUserData, setUserHasLogged } = UseUserDataContext();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        const userRef = db.collection("users").doc(user.email)
        setUserData((await userRef.get()).data())
        setUserHasLogged(true);
      } else {
        setUserData({})
        setUserHasLogged(false);
      }
    });
  }, [setUserData, setUserHasLogged])

  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about-me" component={About} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/comments" component={Comments} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/comment" component={WriteComment} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;// Hook