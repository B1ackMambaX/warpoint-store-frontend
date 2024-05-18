import Header from "../../components/header/Header";
import MainPageBanner from "../../components/banner/Banner";
import About from "../../components/about/About";
import Heading from "../../components/heading/Heading";
import Categories from "../../components/categories/Categories";
import Card from "../../components/card/Card";
import Form from "../../components/form/Form";
import Footer from "../../components/footer/Footer";



const CatalogPage = () => {
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
                            <Card
                                id={228}
                                imageUrl={'Nikita Pidor'}
                                name={'что-то там'}
                                description="ОписаниеОписаниеОписание ОписаниеОписаниеОписание"
                                price={500}
                            />
                            <Card
                                id={228}
                                imageUrl={'Nikita Pidor'}
                                name={'что-то там'}
                                description="ОписаниеОписаниеОписание ОписаниеОписаниеОписание"
                                price={500}
                            />
                            <Card
                                id={228}
                                imageUrl={'Nikita Pidor'}
                                name={'что-то там'}
                                description="ОписаниеОписаниеОписание ОписаниеОписаниеОписание"
                                price={500}
                            />
                        </section>

                        <MainPageBanner heading="Что-то про игру надо написать и отправить регистрироваться" buttonText="Перейти к игре"/>
                        <Form/>
                    </main>
                </div>
                <Footer/>
           </>;
};

export default CatalogPage;
