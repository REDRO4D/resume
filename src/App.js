// import React, { Fragment, useEffect, useState } from 'react';
// import { firebase, db } from './firebase.config';

import React, { Fragment } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/home'; // Importa el modulo home

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;// Hook