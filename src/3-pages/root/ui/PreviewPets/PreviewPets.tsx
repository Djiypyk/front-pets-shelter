import {Button, Input, ProductCard, ProductCardVariant} from "@/7-shared/ui";


export const PreviewPets = () => {
    return (
        <div className="home p-24 md:p-96">

            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <Input
                    variant="outline"
                    placeholder=""
                />
                <Button variant="primary" className="w-full md:w-auto">
                    ПОИСК
                </Button>
                <Button variant="outline" className="w-full md:w-auto">
                    ПОИСК
                </Button>
                <Button variant="inline" className="w-full md:w-auto">
                    ПОИСК
                </Button>

            </div>

            <div className="flex flex-wrap justify-center items-stretch gap-6 mt-8">
                <ProductCard
                    variant={ProductCardVariant.OUTLINE}
                    img="https://i.pinimg.com/1200x/f8/ad/ab/f8adabb2172f25e5447a04bcd02e0f9d.jpg"
                    name="Murzik"
                    age="2"
                    shelter='Приют: "Собачья лапка"'
                    className="flex-1 max-w-xs"
                />
                <ProductCard
                    variant={ProductCardVariant.INLINE}
                    img="https://i.pinimg.com/1200x/f8/ad/ab/f8adabb2172f25e5447a04bcd02e0f9d.jpg"
                    name="Murzik"
                    age="2"
                    shelter='Приют: "Собачья лапка"'
                    className="flex-1 max-w-xs"
                />
                <ProductCard
                    variant={ProductCardVariant.PRIMARY}
                    img="https://i.pinimg.com/1200x/f8/ad/ab/f8adabb2172f25e5447a04bcd02e0f9d.jpg"
                    name="Murzik"
                    age="2"
                    shelter='Приют: "Собачья лапка"'
                    className="flex-1 max-w-xs"
                />
            </div>
        </div>

    );
};

