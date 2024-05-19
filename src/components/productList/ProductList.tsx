import { useState } from 'react';
import { useGetAllProductQuery } from '../../api/productSlice';
import Card from '../card/Card';
import Select from 'react-select';
import Heading from '../heading/Heading';
import './productList.scss';
import Product from '../../models/Product';
import { Link } from 'react-router-dom';

const categoriesOptions = [
    { value: '1', label: 'Мерч' },
    { value: '2', label: 'Атрибутика' },
    { value: 'all', label: 'Все'}
];

const sortingOptions = [
    { value: 'new', label: 'Сначала новые' },
    { value: 'increase', label: 'Цена по возрастанию' },
    { value: 'decrease', label: 'Цена по убыванию'}
]

const ProductList = () => {
	const [category, setCategory] = useState('');
	const [sorting, setSorting] = useState('');
	const [minprice, setMinprice] = useState('');
	const [maxprice, setMaxprice] = useState('');

	const { data: products, isError, isLoading } = useGetAllProductQuery({ offset: 0 });

	const renderList = () => {
		if (isLoading) {
			return <div>Загрузка...</div>;
		} else if (isError) {
			return <div>Произошла ошибка, попробуйте позже</div>;
		} else {
			return filterAndSortingHandler(products!).map((product) => {
				return <Link key={product.id} to={`/product/${product.id}`}><Card id={product.id} name={product.name} description={product.description} price={product.price} imageUrl={product.img_url} /></Link>;
			});
		}
	};

    const filterAndSortingHandler = (products: Product[]) => {
        let productsCopy = [...products];
        const max = maxprice === '' ? Infinity : +maxprice;
        const min = minprice === '' ? -Infinity : +minprice;

        if (category !== '' && category !== 'all') {
            productsCopy = products.filter(product => product.category.id.toString() === category);
        }
        productsCopy = productsCopy.filter(product => (product.price >= min && product.price <= max));
        
        if (sorting === 'new') productsCopy = productsCopy.reverse();
        if (sorting === 'increase') {
            productsCopy = productsCopy.sort((a, b) => a.price - b.price);
        }
        if (sorting === 'decrease') {
            productsCopy = productsCopy.sort((a, b) => b.price - a.price);
        }

        return productsCopy;
    }

	return (
		<main className="product-list">
			<div className="container">
				<section className="product-list__header">
					<Heading>КАТАЛОГ</Heading>
					<div className="product-list__filters">
						<Select
							options={categoriesOptions}
							placeholder={'Категория товара'}
							styles={{
								control: (baseStyles) => ({
									...baseStyles,
									backgroundColor: '#1B1B1B',
									color: '#FBFBFB',
								}),
								singleValue: (baseStyles) => ({
									...baseStyles,
									color: '#FBFBFB',
								}),
								menu: (provided) => ({
									...provided,
									backgroundColor: '#1B1B1B',
									border: '1px solid #FBFBFB',
								}),
								option: (provided) => ({
									...provided,
									backgroundColor: '#1B1B1B',
									color: '#FBFBFB',
									'&:hover': {
										backgroundColor: 'darkblue',
									},
								}),
							}}
                            onChange={event => setCategory(event!.value)}
						/>

						<Select
							options={sortingOptions}
							placeholder={'Сортировка'}
							styles={{
								control: (baseStyles) => ({
									...baseStyles,
									backgroundColor: '#1B1B1B',
									color: '#FBFBFB',
								}),
								singleValue: (baseStyles) => ({
									...baseStyles,
									color: '#FBFBFB',
								}),
								menu: (provided) => ({
									...provided,
									backgroundColor: '#1B1B1B',
									border: '1px solid #FBFBFB',
								}),
								option: (provided) => ({
									...provided,
									backgroundColor: '#1B1B1B',
									color: '#FBFBFB',
									'&:hover': {
										backgroundColor: 'darkblue',
									},
								}),
							}}
                            onChange={event => setSorting(event!.value)}
						/>
						<input className="product-list__input" placeholder="Минимальная цена" type="text" value={minprice} onChange={event => setMinprice(event.currentTarget.value)}/>
						<input className="product-list__input" type="text" placeholder="Максимальная цена" value={maxprice} onChange={event => setMaxprice(event.currentTarget.value)}/>
					</div>
				</section>

				<section className="product-list__items">{renderList()}</section>
			</div>
		</main>
	);
};

export default ProductList;
