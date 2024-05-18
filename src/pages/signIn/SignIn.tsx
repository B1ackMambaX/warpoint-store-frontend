import { Link } from 'react-router-dom';
import { useLoginMutation } from '../../api/authSlice';
import { useState } from 'react';



const SignIn = () => {
    const [login, { isError, error }] = useLoginMutation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const userData = await login({ email: username, password }).unwrap();
            console.log(userData);
          } catch (err) {
            // console.error('Failed to login', err);
          }
    }


    return (
        <main>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Введите email или номер телефона' onChange={(event) => setUsername(event.currentTarget.value)}/>
                <input type="password" placeholder='Введите пароль' onChange={(event) => setPassword(event.currentTarget.value)}/>
                <Link to={'/sign-up'}>
                    <span>Зарегистрироваться</span>
                </Link>
                <button type='submit'>Войти</button>
                <div>{isError && <div>{error!.toString()}</div>}</div>
            </form>
        </main>
    )
}

export default SignIn