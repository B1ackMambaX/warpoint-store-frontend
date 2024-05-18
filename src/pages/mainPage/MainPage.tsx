import Header from "../../components/header/Header";
import MainPageBanner from "../../components/banner/Banner";
import About from "../../components/about/About";
import Heading from "../../components/heading/Heading";
import Categories from "../../components/categories/Categories";
import Card from "../../components/card/Card";
import Form from "../../components/form/Form";
import Footer from "../../components/footer/Footer";

import { useGetAllProductQuery } from '../../api/productSlice';



const CatalogPage = () => {
    const {data: products, isError, isLoading} = useGetAllProductQuery({offset: 0, limit: 3});

    const renderSmallCatalog = () => {
        if (isLoading) {
            return <div>Загрузка...</div>
        } else if (isError) {
            return <div>Произошла ошибка, попробуйте позже</div>
        } else {
            return products.map((product: any) => {
                return <Card
                        key={product.id}
                        id={product.id}
                        imageUrl={product.img_url}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                />
            })
        }
    }


	return <>
                <Header/>
                <div className="container">
                    <main className="main">
                        <MainPageBanner 
                            heading="WARPOINTSTORE"
                            buttonText="Перейти к каталогу"
                            text="У нас вы можете приобрести стильный мерч, который будет напоминать вам о наших увлекательных играх и незабываемых эмоциях"
                        />
                        <About/>
                        <Heading>
                            КАТЕГОРИИ
                        </Heading>
                        <Categories/>
                        <Heading>
                            КАТАЛОГ
                        </Heading>
                        <section className="main-page__catalog">
                            {renderSmallCatalog()}
                        </section>

                        <MainPageBanner heading="Что-то про игру надо написать и отправить регистрироваться" buttonText="Перейти к игре"/>
                        <Form/>
                    </main>
                </div>
                <Footer/>
           </>;
};

export default CatalogPage;
