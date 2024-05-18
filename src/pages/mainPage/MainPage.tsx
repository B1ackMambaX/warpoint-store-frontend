import Header from "../../components/header/Header";
import MainPageBanner from "../../components/banner/Banner";



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
                    </main>
                </div>
           </>;
};

export default CatalogPage;
