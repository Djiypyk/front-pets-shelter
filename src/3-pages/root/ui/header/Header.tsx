import {Input} from "@/7-shared/ui/components/input/Input.tsx";

const Header = () => {

    return (
        <div className={"flex items-center justify-between"}>
            <header className="w-full fixed top-0 left-0 bg-white">
                {/*<Button className={"mr-2"} onClick={() => {}}></Button>*/}

                <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
                    {/* Логотип */}
                    <div className="text-xl font-bold text-amber-500">LOGO</div>
                    <nav className="hidden md:flex space-x-6">
                       <a href={'#'}><Input placeholder={'ПОИСК'}/></a>
                        {/*будет переход на страницу поиска*/}
                    </nav>

                </div>
            </header>
        </div>
    );
};

export default Header;