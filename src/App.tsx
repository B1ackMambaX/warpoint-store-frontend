import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import CatalogPage from "./pages/mainPage/MainPage";
import SignIn from './pages/signIn/SignIn';
import SignUp from './pages/signUp/SignUp';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<CatalogPage/>}/>
				<Route path='/sign-in' element={<SignIn/>}/>
				<Route path='/sign-up' element={<SignUp/>}/>
			</Routes>

		</Router>
	);
};

export default App;
