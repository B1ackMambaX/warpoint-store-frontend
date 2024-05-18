import Button from "../button/Button";
import Heading from "../heading/Heading";
import SmallBanner from "../smallBanner/SmallBanner";

import buttonImage from '../../resources/img/button.svg';

import './form.scss';

const Form = () => {
    return (
        <section className="email-form">
            <SmallBanner isBlack/>

            <form className="email-form__form" onSubmit={event => event.preventDefault()}>
                <Heading>Узнайте больше о вселенной WARPOINT</Heading>
                <input placeholder="Имя" className="email-form__input email-form__input_margin" type="text" />
                <input placeholder="Телефон" className="email-form__input" type="phone" />

                <div className="email-form__submit">
                    <p className="email-form__policy">*Нажимая кнопку отправить, вы соглашаетесь с политикой конфиденциальности</p>
                    <Button tag='button'width={300} height={60} image={buttonImage} text="Отправить" fontSize={24}/>
                </div>
            </form>
        </section>
    )
}

export default Form;