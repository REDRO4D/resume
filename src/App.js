// import React, { Fragment, useEffect, useState } from 'react';
// import { firebase, db } from './firebase.config';

import React, { Fragment } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home'; // Importa el modulo home
import LogIn from './pages/LogIn';
import PageNotFound from './pages/PageNotFound';
import SignUp from './pages/SignUp';

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;// Hook