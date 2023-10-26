import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Registration';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Pages/Home'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Router>
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/Home" component={Home} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
);

