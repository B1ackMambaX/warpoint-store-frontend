import CardProps  from "./cardProps";

import './card.scss';

const Card = ({ name, description, price, imageUrl, id}: CardProps) => {
    return (
        <article className="card">
            <img className="card__image" src={imageUrl} alt={name} />
            <span className="card__heading bebas">{name}</span>
            <p className="card__description">{description.slice(0, 50) + '...'}</p>
            <span className="card__price bebas">{price + '₽'}</span>
        </article>
    );
}

export default Card