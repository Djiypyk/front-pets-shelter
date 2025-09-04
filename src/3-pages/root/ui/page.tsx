import {Header} from "@/4-widgets/root";
import {PreviewPets} from "@/3-pages/root";
import { useEffect } from 'react'
import { selectRandomDogImage, testApiRandomDogThunk } from '@/6-entities/auth'
import { useAppDispatch, useAppSelector } from '@/7-shared/hooks'

export const RootPage = () => {

    const dispatch = useAppDispatch()
    const randomDogImage = useAppSelector(selectRandomDogImage)

    useEffect(() => {
        dispatch(testApiRandomDogThunk())
    }, [])

    return (
        <div>
            <Header/>
            <PreviewPets/>
            {/*<div className="flex items-center justify-center h-screen">*/}
            {/*    <Button children={'+'} variant={ButtonVariant.OUTLINE}/>*/}
            {/*    <Button children={'+'} variant={ButtonVariant.INLINE}/>*/}
            {/*    <Button children={'+'} variant={ButtonVariant.PRIMARY}/>*/}
            {/*</div>*/}
            <img className='w-sm h-sm mt-10 rounded-lg' src={randomDogImage} alt="random dog" />
        </div>

    )

}