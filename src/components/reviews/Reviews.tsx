import Heading from '../heading/Heading';
import './reviews.scss';

import profileImage from '../../resources/img/profile.svg';
import { useGetProductByIdQuery, useGetReviewsByProductIdQuery } from '../../api/productSlice';

const Reviews = ({ productId }: { productId: number }) => {
	const { data: reviews, isError, isLoading } = useGetReviewsByProductIdQuery(productId);
    const { data: product, isLoading: isLoadingProduct, isError: isErrorProduct } = useGetProductByIdQuery(productId);

	return (
		<section className="reviews">
			<Heading>ОТзывы</Heading>
			<div className="reviews__header">
                {isLoadingProduct ? <div>Загрузка</div> : isErrorProduct ? <div>Ошибка...</div> : <div className="reviews__rating">
					<span className="reviews__stars bebas">{product?.reviews.mean_star} звезд</span>
					<span className="reviews__total">{product?.reviews.count} отзывов</span>
				</div>}
			</div>

			<div className="reviews__list">
				{isLoading ? (
					<div>Загрузка....</div>
				) : isError ? (
					<div>Ошибка...</div>
				) : (
					reviews!.map((review) => (
						<article className="review-item" key={review.id}>
							<div className="review-item__user">
								<img src={profileImage} alt="" />
								<div>
									<div className="review-item__name">{review.user.fullname}</div>
									<div className="review-item__date">{new Date(parseInt((review.created_at * 1000).toString())).toDateString()}</div>
								</div>

								<div className="review-item__stars bebas">{review.star}/5</div>
							</div>
							<div className="review-item__text">{review.text}</div>
						</article>
					))
				)}
			</div>
		</section>
	);
};

export default Reviews;
