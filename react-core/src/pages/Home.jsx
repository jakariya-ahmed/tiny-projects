import Users from '../components/core/Users';
import CreateUser from '../components/core/CreateUser';
import MemoComp from '../components/core/MemoComp';
import HeroSlider from '../components/home/SliderCom';
import ServiceHighlightsCom from '../components/home/ServiceHighlightsCom';
import NewCollectionCom from '../components/home/NewCollectionCom';
import OnSaleSection from '../components/home/OnSaleSection';
import TopSellingCom from '../components/home/TopSellingCom';
import PopularCom from '../components/home/PopularCom';
import BannerCom from '../components/home/BannerCom';
import TrandingCom from '../components/home/TrandingCom';

export default function Home() {

    return(
        
        <div className='sm:max-w-[90%] md:max-w-[90%] xl:max-w-[70%] mx-auto px-4 sm:px-0'>
            {/* Slider & banner section  */}
            <HeroSlider />

            {/* Service Highlights section  */}
            <ServiceHighlightsCom />

            {/* New Collection Products  */}
            <NewCollectionCom />

            {/* OnSale section  */}
            <OnSaleSection />
            
            {/* Top Selling products  */}
            <TopSellingCom />

            {/* Popular products  */}
            <PopularCom />

            {/* Banner  */}
            <BannerCom />

            {/* Tranding  */}
            <TrandingCom />

        </div>
    );
}