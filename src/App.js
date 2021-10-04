/* Various component import here from React,Bootstrap etc */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Education from './components/Education/Education';
import NotFound from './components/NotFound/NotFound';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';


/* Here is Router setup to go various page */
function App() {
  return (
    <div className="App">
      <Router>

        <Header></Header>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>

          </Route>
          <Route exact path="/education">
            <Education></Education>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
