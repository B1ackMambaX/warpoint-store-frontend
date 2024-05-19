import ShippingInfoProps from './ShippingInfoProps';
import './shippingInfo.scss';

const ShippingInfo = ({ heading, info }: ShippingInfoProps) => {
    return (
        <div className='shipping-info'>
            <div>
                <p className='shipping-info__heading'>{heading}</p>
                <p className="shipping-info__info">{info}</p>
            </div>

            <span className='shipping-info__change'>Изменить</span>
        </div>
    )
}

export default ShippingInfo;