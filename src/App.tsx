import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import CatalogPage from "./pages/mainPage/MainPage";
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import Catalog from './pages/catalog/Catalog';
import ProductPage from './pages/productPage/ProductPage';
import CartPage from './pages/cart/CartPage';
import Profile from './pages/profile/Profile';
import Game from './pages/game/Game';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<CatalogPage/>}/>
				<Route path='/sign-in' element={<SignIn/>}/>
				<Route path='/sign-up' element={<SignUp/>}/>
				<Route path='/catalog' element={<Catalog/>}/>
				<Route path="/product/:productId" element={<ProductPage/>} />
				<Route path="/cart" element={<CartPage/>} />
				<Route path="/profile" element={<Profile/>}/>
				<Route path="/game" element={<Game/>}/>
			</Routes>

		</Router>
	);
};

export default App;
