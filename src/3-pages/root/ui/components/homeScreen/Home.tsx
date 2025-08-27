import {Button, Input, ProductCard} from "@/7-shared/ui";
import {ProductCardVariant} from "@/7-shared/ui/components/productСards/ProductCard.tsx";


const Home = () => {
    return (
        <div className="home" style={{padding: '400px'}}>
            <div style={{justifyContent: "center", alignItems: "center"}}>
                <Input variant={'outline'} placeholder={'Введите текст'}/>
                <Button variant={'primary'} children={'ПОИСК'}/>
            </div>

            <span style={{display: 'flex' }}>
        <ProductCard variant={ProductCardVariant.PRIMARY}
                     img={'https://i.pinimg.com/1200x/f8/ad/ab/f8adabb2172f25e5447a04bcd02e0f9d.jpg'}
                     name={'Murzik'} age={'2'} shelter={'Приют: "Собачья лапка"'}/>
    <ProductCard variant={ProductCardVariant.PRIMARY}
                 img={'https://i.pinimg.com/1200x/f8/ad/ab/f8adabb2172f25e5447a04bcd02e0f9d.jpg'}
                 name={'Murzik'} age={'2'} shelter={'Приют: "Собачья лапка"'}/>
    <ProductCard variant={ProductCardVariant.PRIMARY}
                 img={'https://i.pinimg.com/1200x/f8/ad/ab/f8adabb2172f25e5447a04bcd02e0f9d.jpg'}
                 name={'Murzik'} age={'2'} shelter={'Приют: "Собачья лапка"'}/>

    </span>

        </div>

    );
};

export default Home;