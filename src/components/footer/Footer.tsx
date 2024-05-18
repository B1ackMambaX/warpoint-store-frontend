import Button from '../button/Button';
import './footer.scss';

import frame from '../../resources/img/frame.svg';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__hr'></div>

            <section>
                <div className="footer__info">
                    <h1 className="footer__heading bebas">WARPOINTSTORE</h1>
                    <span className="footer__requisites">ООО «ВАРПОИНТ»</span>
                    <span className="footer__requisites">ИНН: 6671105370</span>
                    <span className="footer__requisites">КПП: 667101001</span>
                    <span className="footer__requisites">ОГРН: 1206600026544</span>

                    <span className="footer__info">Политика конфиденциальности</span>
                    <span className="footer__info">© 2020-2024. WARPOINT. Все права защищены.</span>
                </div>

                <div className="footer__buttons">
                    <Button tag='button' image={frame} width={203} height={48} text={'Каталог'} fontSize={16}/>
                    <Button tag='button' image={frame} width={203} height={48} text={'Игра'} fontSize={16}/>
                    <Button tag='button' image={frame} width={203} height={48} text={'О WARPOINT'} fontSize={16}/>
                </div>
            </section>
        </footer>
    )
}

export default Footer