import './css/main.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Contact, Home, Profile, Projects, Splash } from './components/';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={Splash}/>
        <div>
        <Navbar />
        <Route exact path="/" component={Home}/>
        <Route exact path="/Projects" component={Projects}/>
        <Route exact path="/Profile" component={Profile}/>
        <Route exact path="/Contact" component={Contact}/>

        </div>
      </Switch>
    </Router>
    </>
  );
}

export default App;
