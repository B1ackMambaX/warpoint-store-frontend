import Category from "./Category";

interface Product {
    id: number;
    category: Category;
    name: string;
    description: string;
    price: number;
    stock: number;
    img_url: string;
    reviews: {
        count: number;
        mean_star: number;
    }
}

export default Product;