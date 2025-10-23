import {Button, ProductCard, Search} from "@/7-shared/ui";
import {nanoid} from "@reduxjs/toolkit";

export const PreviewPets = () => {

    // const dispatch = useAppDispatch()
    // const randomDogImage = useAppSelector(selectRandomDogImage)
    //
    // useEffect(() => {
    //     dispatch(testApiRandomDogThunk())
    // }, [])

    return (
        <div className="bg-white grid items-center justify-center">
            <Search/>
            <div className="flex flex-col items-center justify-center">
                {/*TODO: size cards*/}
                <div className="grid grid-cols-3 gap-4 pb-8">
                    <ProductCard id={nanoid()}
                                 img={'https://i.pinimg.com/1200x/05/69/dc/0569dcfad6c60f57c9c744cc510214a4.jpg'}
                                 name={'Cat'} age={2} shelter={'Кошачий дом'} variant={'outline'} typePet={'cat'}/>
                    <ProductCard id={nanoid()}
                                 img={'https://i.pinimg.com/1200x/05/69/dc/0569dcfad6c60f57c9c744cc510214a4.jpg'}
                                 name={'Pes'} age={2} shelter={'Кошачий дом'} variant={'outline'} typePet={'dog'}/>
                    <ProductCard id={nanoid()}
                                 img={'https://i.pinimg.com/1200x/05/69/dc/0569dcfad6c60f57c9c744cc510214a4.jpg'}
                                 name={'Cat'} age={2} shelter={'Кошачий дом'} variant={'outline'} typePet={'cat'}/>
                    <ProductCard id={nanoid()}
                                 img={'https://i.pinimg.com/1200x/05/69/dc/0569dcfad6c60f57c9c744cc510214a4.jpg'}
                                 name={'Pes'} age={2} shelter={'Кошачий дом'} variant={'outline'} typePet={'dog'}/>
                    <ProductCard id={nanoid()}
                                 img={'https://i.pinimg.com/1200x/05/69/dc/0569dcfad6c60f57c9c744cc510214a4.jpg'}
                                 name={'Cat'} age={2} shelter={'Кошачий дом'} variant={'outline'} typePet={'cat'}/>
                    <ProductCard id={nanoid()}
                                 img={'https://i.pinimg.com/1200x/05/69/dc/0569dcfad6c60f57c9c744cc510214a4.jpg'}
                                 name={'Pes'} age={2} shelter={'Кошачий дом'} variant={'primary'} typePet={'dog'}/>
                </div>
                <Button variant={'inline'} children={'See more'}/>
            </div>
        </div>
    );
};

