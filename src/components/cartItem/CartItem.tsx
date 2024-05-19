import CartItemProps from "./CartItemProps";

import './cartItem.scss';

import trash from '../../resources/img/trash.svg';

const CartItem = ({name, description, price, quantity, imageUrl, onDelete, onIncrement, onDecrement}: CartItemProps) => {
    return (
        <article className="cart-item">
            <img className="cart-item__image" src={imageUrl} alt={name} />

            <div>
                <div className="cart-item__info">
                    <div>
                        <h2 className="cart-item__heading bebas">{name}</h2>
                        <p className="cart-item__descr">{description.slice(0, 50) + '...'}</p>
                    </div>

                    <p className="cart-item__price bebas">{(price * quantity).toFixed(1) + ' Р'}</p>
                </div>

                <div className="cart-item__controls">
                    <div className="counter">
                        <button className="counter__button" onClick={onDecrement}>-</button>
                        <span className="counter__quantity bebas">{quantity}</span>
                        <button className="counter__button" onClick={onIncrement}>+</button>
                    </div>

                    <img src={trash} alt="" onClick={onDelete}/>
                </div>
            </div>
        </article>
    )
}

export default CartItem