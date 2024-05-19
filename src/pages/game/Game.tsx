import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Heading from '../../components/heading/Heading';

import { useGetAvatarQuery, useGetLevelQuery, useGetInventoryQuery, useGetBonusQuery } from '../../api/gameSlice';
import { useGetUserInfoQuery } from '../../api/userApi';

import './game.scss';
import warcoin from '../../resources/img/warcoin.svg';
import userImage from '../../resources/img/level.jpg';
import coupon from '../../resources/img/coupon.jpg';
import certificate from '../../resources/img/certificate.jpg';
import { useState } from 'react';
import Inventory from '../../models/Inventory';
import Bonus from '../../models/Bonus';

const Game = () => {
	const [levels, setLevels] = useState(false);
	const [isAchievements, setIsAchievements] = useState(false);
	const { data: avatar } = useGetAvatarQuery();
	const { data: user } = useGetUserInfoQuery();
	const { data: levelUp } = useGetLevelQuery();
	const { data: inventory } = useGetInventoryQuery();
    const { data: bonus } = useGetBonusQuery();
    const [popup, setPopup] = useState<any>();

    function handleClick (item: Bonus | Inventory) {
        if (!inventory && !isAchievements) {
            return;
        } else if (inventory && !isAchievements) {
            let newItem = item as Inventory;
            setPopup({showed: true, name: newItem.item.name, description: newItem.item.description, onClick: null, src: newItem.item.type === 'discount_order' ? coupon : certificate})
        } else if (bonus && isAchievements) {
            let newItem = item as Bonus;
            if (newItem.received === false) {
                return;
            }
            setPopup({showed: true, name: newItem.bonus.item.name,  description: newItem.bonus.item.description, onClick: () => {}, src: newItem.bonus.img_url})
        }
    }

	const renderInventory = () => {
		if (!inventory && !isAchievements) {
			return (
				<>
					<img src={coupon} alt="" className="inventory__item" />
					<img src={coupon} alt="" className="inventory__item" />
					<img src={coupon} alt="" className="inventory__item" />
					<img src={coupon} alt="" className="inventory__item" />
					<img src={coupon} alt="" className="inventory__item" />
					<img src={coupon} alt="" className="inventory__item" />
					<img src={coupon} alt="" className="inventory__item" />
					<img src={coupon} alt="" className="inventory__item" />
					<img src={coupon} alt="" className="inventory__item" />
					<img src={coupon} alt="" className="inventory__item" />
					<img src={coupon} alt="" className="inventory__item" />
					<img src={coupon} alt="" className="inventory__item" />
				</>
			);
		} else if (inventory && !isAchievements) {
            return inventory.map(item => (<img key={item.id} src={item.item.type === 'discount_order' ? coupon : certificate} alt={item.item.name} className="inventory__item" onClick={() => handleClick(item)}/>))
        } else if (bonus && isAchievements) {
            return bonus.map(item => (<img key={Math.random()} style={item.id === -1 ? {opacity: '0.3'} : {}} src={item.bonus.img_url} alt={item.bonus.type} className="inventory__item" onClick={item.id !== -1 ? () => handleClick(item): undefined}/>))
        }
	};

	return (
		<>
			<Header />
			<div className="container">
				<Heading>МОЙ АВАТАР</Heading>
				<main className="game">
					<section className="inventory">
						<header className="inventory__header">
							<nav className="inventory__nav">
								<div className={!isAchievements ? 'inventory__nav-item inventory__nav-item_active' : 'inventory__nav-item'}>
									<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g clipPath="url(#clip0_138_2479)">
											<path
												d="M8.08078 14.8602C8.35251 12.9533 9.30315 11.2084 10.7581 9.94608C12.213 8.68376 14.0746 7.98877 16.0008 7.98877C17.927 7.98877 19.7885 8.68376 21.2435 9.94608C22.6984 11.2084 23.6491 12.9533 23.9208 14.8602C23.9417 14.9914 23.9362 15.1253 23.9047 15.2543C23.8733 15.3833 23.8164 15.5048 23.7375 15.6116C23.6586 15.7184 23.5593 15.8084 23.4452 15.8764C23.3312 15.9443 23.2047 15.9889 23.0732 16.0075C22.9418 16.0261 22.8079 16.0183 22.6795 15.9847C22.551 15.951 22.4306 15.892 22.3252 15.8113C22.2198 15.7306 22.1315 15.6296 22.0655 15.5144C21.9995 15.3992 21.9571 15.272 21.9408 15.1402C21.737 13.71 21.024 12.4014 19.9328 11.4546C18.8416 10.5079 17.4454 9.98664 16.0008 9.98664C14.5561 9.98664 13.16 10.5079 12.0688 11.4546C10.9776 12.4014 10.2646 13.71 10.0608 15.1402C10.0445 15.272 10.0021 15.3992 9.93608 15.5144C9.87009 15.6296 9.7818 15.7306 9.67639 15.8113C9.57097 15.892 9.45054 15.951 9.3221 15.9847C9.19367 16.0183 9.05981 16.0261 8.92834 16.0075C8.79687 15.9889 8.67041 15.9443 8.55636 15.8764C8.4423 15.8084 8.34293 15.7184 8.26403 15.6116C8.18514 15.5048 8.1283 15.3833 8.09684 15.2543C8.06538 15.1253 8.05992 14.9914 8.08078 14.8602Z"
												fill={isAchievements ? '#FBFBFB' : '#3970F6'}
											/>
											<path fillRule="evenodd" clipRule="evenodd" d="M8 19C8 18.7348 8.10536 18.4804 8.29289 18.2929C8.48043 18.1054 8.73478 18 9 18H23C23.2652 18 23.5196 18.1054 23.7071 18.2929C23.8946 18.4804 24 18.7348 24 19V27C24 27.2652 23.8946 27.5196 23.7071 27.7071C23.5196 27.8946 23.2652 28 23 28H9C8.73478 28 8.48043 27.8946 8.29289 27.7071C8.10536 27.5196 8 27.2652 8 27V19ZM10 20V26H22V20H20C19 20 19.2652 20 19 20C18.7348 20 19 20 18 20H10Z" fill={isAchievements ? '#FBFBFB' : '#3970F6'} />
											<path
												d="M12 4.682V4C12 2.93913 12.4214 1.92172 13.1716 1.17157C13.9217 0.421427 14.9391 0 16 0C17.0609 0 18.0783 0.421427 18.8284 1.17157C19.5786 1.92172 20 2.93913 20 4V4.682C24.66 6.33 28 10.776 28 16V18.382L30.34 19.552C30.8387 19.801 31.2582 20.184 31.5514 20.6581C31.8447 21.1322 32 21.6786 32 22.236V27C32 27.7956 31.6839 28.5587 31.1213 29.1213C30.5587 29.6839 29.7956 30 29 30H27C26.088 31.214 24.636 32 23 32H9C8.22377 32 7.45821 31.8193 6.76393 31.4721C6.06966 31.125 5.46574 30.621 5 30H3C2.20435 30 1.44129 29.6839 0.87868 29.1213C0.31607 28.5587 0 27.7956 0 27L0 22.236C1.883e-05 21.6786 0.155345 21.1322 0.448556 20.6581C0.741768 20.184 1.16127 19.801 1.66 19.552L4 18.382V16C3.99911 13.5177 4.76803 11.0963 6.2008 9.06926C7.63358 7.04224 9.6597 5.50942 12 4.682ZM14 4V4.166C15.3239 3.94221 16.6761 3.94221 18 4.166V4C18 3.46957 17.7893 2.96086 17.4142 2.58579C17.0391 2.21071 16.5304 2 16 2C15.4696 2 14.9609 2.21071 14.5858 2.58579C14.2107 2.96086 14 3.46957 14 4ZM6 27C6 27.7956 6.31607 28.5587 6.87868 29.1213C7.44129 29.6839 8.20435 30 9 30H23C23.7956 30 24.5587 29.6839 25.1213 29.1213C25.6839 28.5587 26 27.7956 26 27V16C26 13.3478 24.9464 10.8043 23.0711 8.92893C21.1957 7.05357 18.6522 6 16 6C13.3478 6 10.8043 7.05357 8.92893 8.92893C7.05357 10.8043 6 13.3478 6 16V27ZM4 20.62L2.552 21.344C2.38611 21.4271 2.24661 21.5548 2.14913 21.7127C2.05164 21.8705 2.00001 22.0524 2 22.238V27C2 27.2652 2.10536 27.5196 2.29289 27.7071C2.48043 27.8946 2.73478 28 3 28H4V20.62ZM28 20.62V28H29C29.2652 28 29.5196 27.8946 29.7071 27.7071C29.8946 27.5196 30 27.2652 30 27V22.236C30 22.0504 29.9484 21.8685 29.8509 21.7107C29.7534 21.5528 29.6139 21.4251 29.448 21.342L28 20.618V20.62Z"
												fill={isAchievements ? '#FBFBFB' : '#3970F6'}
											/>
										</g>
									</svg>
									<span onClick={() => setIsAchievements(false)} className="bebas">ИНВЕНТАРЬ</span>
								</div>

								<div className={isAchievements ? 'inventory__nav-item inventory__nav-item_active' : 'inventory__nav-item'}>
									<svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M23.9993 3.1665C22.7993 3.1665 21.3327 4.49984 21.3327 5.83317H10.666C10.666 4.49984 9.19935 3.1665 7.99935 3.1665H2.66602V15.1665C2.66602 16.4998 3.99935 17.8332 5.33268 17.8332H8.26602C8.79935 20.4998 10.5327 22.7665 14.666 23.1665V25.9398C10.666 26.5532 10.666 29.8332 10.666 29.8332H21.3327C21.3327 29.8332 21.3327 26.5532 17.3327 25.9398V23.1665C21.466 22.7665 23.1993 20.4998 23.7327 17.8332H26.666C27.9993 17.8332 29.3327 16.4998 29.3327 15.1665V3.1665H23.9993ZM7.99935 15.1665H5.33268V5.83317H7.99935V15.1665ZM21.3327 15.8332C21.3327 18.4065 20.5593 20.4998 15.9993 20.4998C11.4527 20.4998 10.666 18.4065 10.666 15.8332V8.49984H21.3327V15.8332ZM26.666 15.1665H23.9993V5.83317H26.666V15.1665Z" fill={!isAchievements ? '#FBFBFB' : '#3970F6'} />
									</svg>
									<span onClick={() => setIsAchievements(true)} className="bebas">ДОСТИЖЕНИЯ</span>
								</div>
							</nav>

							<div className="inventory__balance">
								<span className="inventory__balance-amount bebas">{avatar?.coin || 0}</span>
								<img src={warcoin} alt="" />
							</div>
						</header>

						<div className="inventory__items">{renderInventory()}</div>
					</section>

					<section className="avatar">
						<header className="avatar__header">
							<div className="avatar__header-info">
								<span className="avatar__name bebas">{user?.fullname || 'Имя'}</span>
								<span className="avatar__percents bebas">{avatar && levelUp ? `${Math.floor((avatar.progress / levelUp.up_value) * 100)}%` : '0%'}</span>
							</div>
							<div className="avatar__progression" onClick={() => setLevels(true)}>
								<div className="avatar__prev-level bebas">{avatar?.level_number || 0}</div>
								<div className="avatar__bar">
									<div className="avatar__bar-inner" style={{ width: avatar && levelUp ? `${(avatar.progress / levelUp.up_value) * 100}%` : '0%' }}></div>
								</div>
								<div className="avatar__next-level bebas">{avatar?.level_number ? avatar.level_number + 1 : 1}</div>
							</div>
						</header>

						<img className="avatar__image" src={avatar ? avatar!.avatar_img.img_url : userImage} alt="" />
					</section>
				</main>
			</div>

			<div className={!levels ? 'popup none' : 'popup'}>
				<div className="popup__inner">
					<header className="popup__header">
						<p className="popup__heading bebas">УРОВНИ</p>
						<svg onClick={() => setLevels(false)} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M23.9181 10.3361L18.2541 16.0001L23.9181 21.6641L21.6621 23.9201L15.9981 18.2721L10.3501 23.9201L8.07812 21.6481L13.7261 16.0001L8.07812 10.3521L10.3501 8.08008L15.9981 13.7281L21.6621 8.08008L23.9181 10.3361Z" fill="#FBFBFB" />
						</svg>
					</header>

					<div className="popup__level">
						<div className="popup__level-number bebas">1</div>
						<div className="popup__level-score">При регистрации</div>
						<div className="popup__level-reward">Скидка 10% на первую покупку</div>
					</div>

					<div className="popup__level">
						<div className="popup__level-number bebas">2</div>
						<div className="popup__level-score">Набрать 1000 очков опыта</div>
						<div className="popup__level-reward">
							Сертификат на 500р
							<br /> 1 бесплатная доставка
						</div>
					</div>
					<div className="popup__level">
						<div className="popup__level-number bebas">3</div>
						<div className="popup__level-score">Набрать 2000 очков опыта</div>
						<div className="popup__level-reward">Сертификат на аттракцион</div>
					</div>
					<div className="popup__level">
						<div className="popup__level-number bebas">4</div>
						<div className="popup__level-score">Набрать 3000 очков опыта</div>
						<div className="popup__level-reward">
							Закрытый VR-баттл <br /> Купон на скидку 10% на мерч
						</div>
					</div>
					<div className="popup__level">
						<div className="popup__level-number bebas">5</div>
						<div className="popup__level-score">Набрать 5000 очков опыта</div>
						<div className="popup__level-reward">
							2 бесплатные игры по 1 часу <br /> Мерч в подарок при покупке
						</div>
					</div>
				</div>
			</div>

			<div className={popup?.showed ? 'popup' : 'popup none'}>
				<div className="popup__inner popup-bonus__inner">
					<header className="popup__header">
						<p className="popup__heading bebas">{popup?.name}</p>
						<svg onClick={() => setPopup((state: any) => ({...state, showed: false}))} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M23.9181 10.3361L18.2541 16.0001L23.9181 21.6641L21.6621 23.9201L15.9981 18.2721L10.3501 23.9201L8.07812 21.6481L13.7261 16.0001L8.07812 10.3521L10.3501 8.08008L15.9981 13.7281L21.6621 8.08008L23.9181 10.3361Z" fill="#FBFBFB" />
						</svg>
					</header>

					<div className="popup-bonus__content">
						<img className="popup-bonus__image" src={popup?.src} alt="" />
						<p className="popup-bonus__description">{popup?.description}</p>

						{popup?.onClick ? <button onClick={popup.onClick} className="popup-bonus__button">Применить</button> : null}
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Game;
