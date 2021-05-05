import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Navbar from './components/Navbar/navbar.js';
import SignIn from './pages/signin/signin.js';
import SignUp from './pages/signup/signup.js';
import Landing from './pages/landing/landing.js';

import GuessOutput from './components/GuessOutput/GuessOutput.js';

function App() {
  return (
    // to add path, add <Route path='PATHNAME'> <COMPONENT/> </Route>
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/signin">
            <SignIn/>
          </Route>
          <Route path="/signup">
            <SignUp/>
          </Route>
          <Route path='/landing'>
            <Landing/>
          </Route>
          <Route path='/'>
            {/* <h1>landing page</h1> */}
            {/* <Description/> */}
            <GuessOutput/>
          </Route>
        </Switch>
      </BrowserRouter>
     </div>
  );
}

export default App;
