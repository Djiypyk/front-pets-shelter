import {Button} from "@/7-shared/ui";
import {ButtonVariant} from "@/7-shared/ui/components/button/Button.tsx";
import Home from "@/3-pages/root/ui/components/homeScreen/Home.tsx";
import {Header} from "@/4-widgets/root";

export const RootPage = () => {

    return (
        <div>
            <Header/>
            <Home/>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                <Button children={'+'} variant={ButtonVariant.OUTLINE}/>
            </div>
        </div>

    )

}