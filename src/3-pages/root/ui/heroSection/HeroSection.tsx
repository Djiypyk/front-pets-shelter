import {useEffect} from "react";

export const HomePage = () => {
    useEffect(() => {
        document.title = "Adopt with Elegance"
    }, [])

    return (
        <main className="bg-white text-black">
            <section className="relative h-screen w-full overflow-hidden">

                <header className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-6 z-20">
                    {/* Logo */}
                    <div className="text-2xl font-semibold tracking-widest">PETS</div>

                    {/* Search */}
                    <div className="flex-1 max-w-[500px] mx-8">
                        <input
                            type="text"
                            placeholder="Поиск"
                            className="w-full py-4 px-4 border border-neutral-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>


                </header>


                {/*logo*/}
                <img
                    src="/hero-dog.jpg"
                    alt="Elegant dog on couch"
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black/30 flex items-center justify-center">
                    <h1 className="text-white text-5xl md:text-7xl font-light tracking-wide uppercase">
                        Найди своего идеального друга
                    </h1>
                    <div className="flex gap-4">
                        <button className="px-6 py-3 border border-white text-white rounded-full text-sm hover:bg-white hover:text-black transition">
                            Смотреть приюты
                        </button>
                        <button className="px-6 py-3 bg-white text-black rounded-full text-sm hover:bg-neutral-100 transition">
                            О нас
                        </button>
                    </div>
                </div>

            </section>



            <section className="p-6 md:p-12">
                <h2 className="text-3xl font-light uppercase mb-6 text-center">
                    Новые поступления
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="group">
                            <div className="aspect-square overflow-hidden">
                                <img
                                    src={`/pets/pet${i + 1}.jpg`}
                                    alt={`Pet ${i + 1}`}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="mt-2">
                                <p className="uppercase text-sm">Бакс, 2 года</p>
                                <p className="text-xs text-neutral-500">Москва, приют "Дружок"</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}