import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import SignIn from "./pages/SignIn/SignIn.js";
import SignUp from "./pages/SignUp/SignUp.js";
import Landing from "./pages/Landing/Landing.js";
import GuessProb from "./pages/Problems/GuessOutput/GuessProb.js";
import FillIn from "./pages/Problems/FillIn/FillIn.js";
import Lessons from "./pages/Lesson/Lessons.js";
import Typeracer from "./pages/Typeracer/Typeracer.js";
import Profile from './pages/Profile/Profile.js';

function App() {
	return (
		// to add path, add <Route path='PATHNAME'> <COMPONENT/> </Route>
		<BrowserRouter>
			<Switch>
    
				<Route path="/signin">
					<SignIn />
				</Route>

				<Route path="/signup">
					<SignUp />
				</Route>

				<Route path="/guessoutput">
					<GuessProb />
				</Route>

				<Route path="/fillin">
					<FillIn />
				</Route>

				<Route path="/lessons">
					<Lessons />
				</Route>

				<Route path="/racer">
					<Typeracer />
				</Route>
        
        <Route path='/profile'>
          <Profile/>
        </Route>

				<Route path="/">
					<Landing />
				</Route>
    
			</Switch>
		</BrowserRouter>
	);
}

export default App;
