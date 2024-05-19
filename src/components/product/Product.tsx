import ProductProps from "./productProps";
import { useGetProductByIdQuery } from "../../api/productSlice";
import './product.scss';
import { useEffect, useState } from "react";
import Cart from "../../models/Cart";

const Product = ({ productId }: ProductProps) => {
    const { data: product, isLoading, isError } = useGetProductByIdQuery(productId);
    const [inCart, setInCart] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('cart')) {
            const cart: Cart = JSON.parse(localStorage.getItem('cart')!);
            if (cart.find(item => item.product.id === productId)) {
                setInCart(true);
            }
        }
    }, []);

    const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        let cart: Cart = [];
        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart')!);
        }
        cart.push({product: product!, quantity: 1})
        setInCart(true);

        localStorage.setItem('cart', JSON.stringify(cart));
    }


    function renderItem() {
        if (isLoading) {
            return <div>Загрузка...</div>
        } else if (isError) {
            return <div>Ошибка...</div>
        } else {
            return (<article className="product">
                        <img src={product!.img_url} alt={product!.name} className="product__img" />
                        <div className="product__info">
                            <h1 className="product__heading bebas">{product!.name}</h1>
                            <h2 className="product__heading-descr bebas">Описание</h2>
                            <p className="product__description">{product!.description}</p>

                            <div className="product__to-cart">
                                <span className="product__price bebas">{product!.price + ' Р'}</span>
                                <button disabled={inCart ? true : false} onClick={clickHandler} className="product__btn">{inCart ?'В корзине' : 'Добавить в корзину'}</button>
                            </div>
                        </div>
                    </article>)
        }
    }

    return (
        <div className="container">
            {renderItem()}
        </div>
    )
}

export default Product;