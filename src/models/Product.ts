import Category from "./Category";

interface Product {
    id: number;
    category: Category;
    name: string;
    description: string;
    price: number;
    stock: number;
    img_url: string;
}

export default Product;