import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import CatalogPage from "./pages/mainPage/MainPage";
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';

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
