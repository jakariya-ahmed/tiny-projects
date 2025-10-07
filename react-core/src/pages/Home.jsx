import Users from '../components/core/Users';
import CreateUser from '../components/core/CreateUser';
import MemoComp from '../components/core/MemoComp';
import HeroSlider from '../components/home/SliderCom';
import ServiceHighlightsCom from '../components/home/ServiceHighlightsCom';
import NewCollectionCom from '../components/home/NewCollectionCom';
import OnSaleSection from '../components/home/OnSaleSection';


export default function Home() {

    return(
        
        <div className='max-w-[70%] mx-auto'>
            {/* Slider & banner section  */}
            <HeroSlider />

            {/* Service Highlights section  */}
            <ServiceHighlightsCom />

            {/* New Collection Products  */}
            <NewCollectionCom />

            {/* OnSale section  */}
            <OnSaleSection />
            
        </div>
    );
}