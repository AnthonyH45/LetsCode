import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import Navbar from './components/Navbar/Navbar.js';
import SignIn from './pages/SignIn/SignIn.js';
import SignUp from './pages/SignUp/SignUp.js';
import Landing from './pages/Landing/Landing.js';

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

          <Route path='/demoproblem'>
            <GuessOutput/>
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
