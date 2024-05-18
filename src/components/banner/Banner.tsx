import Button from '../button/Button';
import BannerProps from './BannerProps';
import './banner.scss';
import buttonImage from '../../resources/img/button.svg'

const MainPageBanner = ({heading, text, buttonText}: BannerProps) => {
  return (
    <section className='banner'>
        <div className="banner__inner">
            {heading && <p className='bebas banner__heading'>{heading}</p>}
            {text && <p className="banner__text">{text}</p>}
            <Button tag="button" text={buttonText} image={buttonImage} height={60} width={300} fontSize={24}/>
        </div>
    </section>
  )
}

export default MainPageBanner;