import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Admission from './pages/Admission/Admission';
import About from './pages/About/About';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FormConfirmation from './pages/FormConfirmation/FormConfirmation';

import './App.scss';

const App = () => {
  return (
    <Fragment>
      <Header/>
      <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/admission" component={Admission} />
        <Route exact path="/formconfirmation" component={FormConfirmation} />
        <Route exact path="/about" component={About} />
      </Switch>
      </Router>
      <Footer/>
    </Fragment>
  );
};

export default App;