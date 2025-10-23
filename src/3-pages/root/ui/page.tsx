import {Header} from "@/4-widgets/root";
import {PreviewPets, StartScreen} from "@/3-pages/root";


export const RootPage = () => {

    return (
        <div className="bg-white">
            <Header/>
            <StartScreen/>
            <PreviewPets/>
        </div>

    )

}