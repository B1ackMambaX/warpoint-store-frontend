import { useRegisterMutation, useLoginMutation } from '../../api/authSlice';
import { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Heading from '../../components/heading/Heading';

import { useNavigate } from 'react-router-dom'

import './auth.scss';
import Button from '../../components/button/Button';
import buttonImage from '../../resources/img/button.svg';
import RegisterBody from '../../models/RegisterBody';



const SignIn = () => {
    const navigate = useNavigate();
    const [register, { isError }] = useRegisterMutation();
    const [login] = useLoginMutation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        if (localStorage.getItem('access_token')) {
            navigate('/');
        }
    }, []);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const requestBody: RegisterBody = {
                email,
                phone,
                password,
                fullname: `${name} ${surname}`
            }
            const requestResponse =  await register(requestBody).unwrap();
            const token = await login({email: requestResponse.email, password: requestBody.password}).unwrap();
            localStorage.setItem('access_token', token.access_token);
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
                    <Heading className="auth__heading">Регистрация</Heading>
                    <input placeholder="Email" className="auth__input auth__input_margin" type="email" onChange={event => setEmail(event.currentTarget.value)}/>
                    <input placeholder="Пароль" className="auth__input auth__input_mb-small" type="password" onChange={event => setPassword(event.currentTarget.value)}/>
                    <input placeholder="Номер телефона" className="auth__input auth__input_mb-small" type="phone" onChange={event => setPhone(event.currentTarget.value)}/>
                    <input placeholder="Имя" className="auth__input auth__input_mb-small" type="text" onChange={event => setName(event.currentTarget.value)}/>
                    <input placeholder="Фамилия" className="auth__input auth__input_mb" type="text" onChange={event => setSurname(event.currentTarget.value)}/>
                    <Button tag='button' type='submit' text='Зарегистрироваться' width={300} height={60} fontSize={24} image={buttonImage}/>

                    {isError && <div className='auth__error'>Проверьте правильность введенных данных</div>}

                    <span className='auth__register auth__register_small'>Есть аккаунт?<br></br></span>
                    <span className='auth__register'>Войти</span>
                </form>
            </main>
            <Footer/>
        </>

    )
}

export default SignIn