import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { useGetUserInfoQuery } from '../../api/userApi';

import './profile.scss';

import profileAvatar from '../../resources/img/profile.svg';
import Heading from '../../components/heading/Heading';
import ShippingInfo from '../../components/shippingInfo/ShippingInfo';
import OrderHistory from '../../components/orderHistory/OrderHistory';

const Profile = () => {
	const navigate = useNavigate();
	const { data: user, isLoading, isError } = useGetUserInfoQuery();

	useEffect(() => {
		if (!localStorage.getItem('access_token')) {
			navigate('/sign-in');
		}
	}, []);
	return (
		<>
			<Header />
			<div className="container">
				<main className="profile">
					<article className="profile__redirect">
						{isLoading ? (
							<div>Загрузка...</div>
						) : isError ? (
							<div>Ошибка</div>
						) : (
							<>
								<img src={profileAvatar} alt="" className="profile__avatar" />
								<h2 className="profile__name">{user!.fullname}</h2>
							</>
						)}
					</article>

					<div className="profile___info">
						<Heading>ПРОФИЛЬ</Heading>
						<div className="profile__user">
							<h2 className="profile__user-heading bebas">ЛИЧНЫЕ ДАННЫЕ</h2>
							{isLoading ? (
								<div>Загрузка...</div>
							) : isError ? (
								<div>Ошибка</div>
							) : (
								<>
									<input type="text" className="profile__user-input" value={user!.fullname} readOnly />
									<input type="phone" className="profile__user-input" value={user!.phone} readOnly />
									<input type="email" className="profile__user-input" value={user!.email} readOnly />
								</>
							)}
						</div>
                        
                        <h3 className='profile__shipping-info-heading bebas'>Способ оплаты</h3>
                        <ShippingInfo heading='Основной способ' info='Sberpay ⋅⋅ 6728'/>
                        <h3 className='profile__shipping-info-heading bebas'>Адреса доставки</h3>
                        <ShippingInfo heading='Мои адреса' info='г. Екатеринбург, ул. Ленина, 36, кв. 25'/>
                        <h3 className='profile__shipping-info-heading bebas'> История заказов</h3>
                        <OrderHistory/>
					</div>
				</main>
			</div>
			<Footer />
		</>
	);
};

export default Profile;
