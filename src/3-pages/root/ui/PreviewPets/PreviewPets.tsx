import {Button, Input, ProductCard} from "@/7-shared/ui";
import {nanoid} from "@reduxjs/toolkit";
import {ShelterCard} from "@/7-shared/ui/components/shelterCards/ShelterCard.tsx";

export const PreviewPets = () => {

    // const dispatch = useAppDispatch()
    // const randomDogImage = useAppSelector(selectRandomDogImage)
    //
    // useEffect(() => {
    //     dispatch(testApiRandomDogThunk())
    // }, [])

    return (
        <div className="bg-gray-400 flex flex-col items-center justify-center p-5">
            <h1 className="p-4">Find your new best friend</h1>
            <h2 className="p-4">Search nearby shelters and adopt a pet today</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 max-w-1/2">
                <Input variant={'outline'} placeholder={'Search'}/>
                <Button variant={'primary'} children={'Search'}/>
            </div>

            {/*TODO: size cards*/}
            <div className="p-8 flex flex-row gap-6 mt-8">
                <ProductCard id={nanoid()}
                             img={'https://i.pinimg.com/1200x/05/69/dc/0569dcfad6c60f57c9c744cc510214a4.jpg'}
                             name={'Cat'} age={2} shelter={'Кошачий дом'} variant={'outline'} typePet={'cat'} />
                <ProductCard id={nanoid()}
                             img={'https://i.pinimg.com/1200x/05/69/dc/0569dcfad6c60f57c9c744cc510214a4.jpg'}
                             name={'Pes'} age={2} shelter={'Кошачий дом'} variant={'outline'} typePet={'dog'} />
                <ProductCard id={nanoid()}
                             img={'https://i.pinimg.com/1200x/05/69/dc/0569dcfad6c60f57c9c744cc510214a4.jpg'}
                             name={'Green'} age={2} shelter={'Кошачий дом'} variant={'primary'} typePet={'all'} />
            </div>
            <Button variant={'inline'} children={'See more'}/>
            <div>
                <ShelterCard id={nanoid()} name={'New Shelter'} img={'https://i.pinimg.com/1200x/05/69/dc/0569dcfad6c60f57c9c744cc510214a4.jpg'}/>
            </div>
        </div>
    );
};

