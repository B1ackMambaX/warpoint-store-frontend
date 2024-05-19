import { useParams } from "react-router-dom"
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Product from "../../components/product/Product";
import Reviews from "../../components/reviews/Reviews";

const ProductPage = () => {
    const { productId } = useParams();
    return (
        <>
            <Header/>
            <Product productId={parseInt(productId!)}/>
            <Reviews productId={parseInt(productId!)}/>
            <Footer/>
        </>
  )
}

export default ProductPage