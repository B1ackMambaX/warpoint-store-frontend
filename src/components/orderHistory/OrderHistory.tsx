import './orderHistory.scss';
const OrderHistory = () => {
  return (
    <section className='order-history'>
        <div className="order-history__item">
            <img className='order-history__img' src="" alt="" />
            <div className="order-history__info">
                <p className="order-history__number">№ 9-262-01702</p>
                <p className="order-history__date">9 мая 2024</p>
                <p className="order-history__status">Выдан клиенту</p>
                <p className="order-history__price">1500 Р</p> 
            </div>
        </div>

        <div className="order-history__item">
            <img className='order-history__img' src="" alt="" />
            <div className="order-history__info">
                <p className="order-history__number">№ 9-262-01702</p>
                <p className="order-history__date">9 мая 2024</p>
                <p className="order-history__status">Выдан клиенту</p>
                <p className="order-history__price">1500 Р</p> 
            </div>
        </div>
    </section>
  )
}

export default OrderHistory