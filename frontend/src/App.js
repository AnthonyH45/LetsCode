import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import Navbar from './components/Navbar/Navbar.js';
import SignIn from './pages/signin/signin.js';
import SignUp from './pages/signup/signup.js';
import Landing from './pages/landing/landing.js';
import GuessProb from './pages/Problems/GuessOutput/GuessProb.js';

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

          <Route path='/demoproblem'>
            <GuessProb/>
          </Route>

          <Route path='/'>
            <Landing/>
          </Route>
          
        </Switch>
      </BrowserRouter>
     </div>
  );
}

export default App;
