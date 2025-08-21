import {ProductCard} from "@/7-shared/ui";
import {ProductCardVariant} from "@/7-shared/ui/components/productСards/ProductCard.tsx";


const Home = () => {
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", backgroundColor: 'lightgray'}}>
            <div style={{backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh', width: '1200px'}}>
                <ProductCard variant={ProductCardVariant.PRIMARY} img={'https://i.pinimg.com/1200x/f8/ad/ab/f8adabb2172f25e5447a04bcd02e0f9d.jpg'}
                             name={'Murzik'} age={'2'} shelter={'Приют: "Собачья лапка"'} />
            </div>
        </div>


    );
};

export default Home;