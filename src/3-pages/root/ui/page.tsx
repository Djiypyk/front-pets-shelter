import {Header} from "@/4-widgets/root";
import {PreviewPets} from "@/3-pages/root";
import {Button, ButtonVariant} from "@/7-shared/ui";

export const RootPage = () => {

    return (
        <div>
            <Header/>
            <PreviewPets/>
            <div className="flex items-center justify-center h-screen">
                <Button children={'+'} variant={ButtonVariant.OUTLINE}/>
                <Button children={'+'} variant={ButtonVariant.INLINE}/>
                <Button children={'+'} variant={ButtonVariant.PRIMARY}/>
            </div>
        </div>

    )

}