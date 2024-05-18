import { useLoginMutation } from '../../api/authSlice';
import { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Heading from '../../components/heading/Heading';

import { Link, useNavigate } from 'react-router-dom'

import './auth.scss';
import Button from '../../components/button/Button';
import buttonImage from '../../resources/img/button.svg';



const SignIn = () => {
    const navigate = useNavigate();
    const [login, { isError }] = useLoginMutation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (localStorage.getItem('access_token')) {
            navigate('/');
        }
    }, []);


    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const userData = await login({ email, password }).unwrap();
            localStorage.setItem('access_token', userData.access_token);
            navigate('/');
          } catch (err) {
            console.log(err);
          }
    }


    return (
        <>
            <Header/>
            <main className='auth'>
                <form className='auth__form' onSubmit={handleSubmit}>
                    <Heading className="auth__heading">ВХОД</Heading>
                    <input placeholder="Email" className="auth__input auth__input_margin" type="email" onChange={event => setEmail(event.currentTarget.value)}/>
                    <input placeholder="Пароль" className="auth__input auth__input_mb" type="password" onChange={event => setPassword(event.currentTarget.value)}/>
                    <Button tag='button' type='submit' text='Войти' width={300} height={60} fontSize={24} image={buttonImage}/>

                    {isError && <div className='auth__error'>Проверьте правильность введенных данных</div>}

                    <Link to={'/sign-up'}>
                        <span className='auth__register auth__register_small'>Нет аккаунта?<br></br></span>
                        <span className='auth__register'>Зарегистрироваться</span>
                    </Link>
                </form>
            </main>
            <Footer/>
        </>

    )
}

export default SignIn
