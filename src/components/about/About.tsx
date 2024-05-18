import './about.scss';
import decor from '../../resources/img/decor.svg';

const About = () => {
    return (
        <section className="about">
            <h2 className="about__heading">О нас</h2>
            <p className="about__text bebas">Компания WARPOINT является лидером в сфере LBE-VR в России: в наших парках представлены самые актуальные и современные технологии, которые только доступны на рынке VR-развлечений.</p>
            <img src={decor} alt="" className="about__decoration" />
        </section>
    )
}

export default About