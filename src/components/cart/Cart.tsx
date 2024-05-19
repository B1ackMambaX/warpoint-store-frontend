import { useEffect, useState } from 'react';
import CartItem from '../cartItem/CartItem';
import Heading from '../heading/Heading';
import './cart.scss';
import CartModel from '../../models/Cart';
import Button from '../button/Button';
import frame from '../../resources/img/frame.svg';

const Cart = () => {
    const [cart, setCart] = useState<CartModel>([]);


    useEffect(() => {
        if (localStorage.getItem('cart')) {
            setCart(JSON.parse(localStorage.getItem('cart')!));
        }
    }, [])

    useEffect(() => {
        if (cart.length !== 0) {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart])

    const deleteHandler = (id: number) => {
        setCart(state => state.filter(item => item.product.id !== id));
    }

    const incrementHandler = (id: number) => {
        setCart(state => {
            const newState = state.map(item => {
                if (item.product.id === id) {
                    return {product: item.product, quantity: item.quantity + 1}
                } else {
                    return item;
                }
            })
            return newState;
        })
    }

    const decrementHandler = (id: number) => {
        setCart(state => {
            const newState = state.map(item => {
                if (item.product.id === id) {
                    if (item.quantity !== 1) {
                        return {product: item.product, quantity: item.quantity - 1}
                    } else {
                        return item;
                    }

                } else {
                    return item;
                }
            })
            return newState;
        });
    }

    const getTotalPrice = () => {
        let totalPrice = 0;
        cart.forEach(item => {
            totalPrice += item.product.price * item.quantity;
        });

        return totalPrice;
    }

    return (
        <div className="container">
            <main className="cart">
                <Heading>КОРЗИНА</Heading>
                <div className="cart__info">
                    <div className="cart__list">
                        {cart.length !== 0 && cart.map(item => (<
                            CartItem
                                key={item.product.id}
                                name={item.product.name}
                                description={item.product.description}
                                imageUrl={item.product.img_url}
                                quantity={item.quantity}
                                price={item.product.price}
                                onDelete={(_) => deleteHandler(item.product.id)}
                                onIncrement={(_) => incrementHandler(item.product.id)}
                                onDecrement={(_) => decrementHandler(item.product.id)}
                        />))}
                    </div>
                    <div>
                        <div className="cart__checkout">
                            <h2 className="cart__checkout-heading bebas">ИТОГО</h2>

                            <div className='cart__checkout-div'>
                                <h3 className="cart__checkout-subheading">Доставка</h3>
                                <span className='cart__checkout-info'>17 мая</span>
                            </div>

                            <div>
                                <h3 className="cart__checkout-subheading">Оплата</h3>
                                <span className='cart__checkout-info'>Картой</span>
                            </div>

                            <div className="cart__checkout-buttons">
                                <Button tag="button" text="При получении" image={frame} width={178} height={48} fontSize={16}/>
                                <Button tag="button" text="Картой" image={frame} width={178} height={48} fontSize={16}/>
                            </div>


                            <div className="cart__checkout-total">
                                <h2 className="cart__checkout-heading bebas">ИТОГО</h2>
                                <span className="cart__checkout-heading bebas">{getTotalPrice() + ' Р'}</span>
                            </div>
                        </div>
                        <button className='cart__checkout-submit'>Оформить заказ</button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Cart;