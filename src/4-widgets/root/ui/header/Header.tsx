import { useState } from "react"

export const Header = ()=> {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-lg">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* Logo */}
                <a href="/" className="text-xl font-bold text-gray-900">
                    MyApp
                </a>

                {/* Desktop nav */}
                <nav className="hidden md:flex space-x-6 text-gray-700">
                    <a href="/dashboard" className="hover:text-black">Shelters</a>
                    <a href="/about" className="hover:text-black">About</a>
                    <a href="/help" className="hover:text-black">Help</a>
                </nav>

                {/* Actions */}
                <div className="flex items-center space-x-4">
                    <button aria-label="Search" className="p-2 hover:bg-gray-100 rounded-xl">🔍</button>
                    <button aria-label="Notifications" className="p-2 hover:bg-gray-100 rounded-xl">💡</button>
                    <a href="/profile" className="p-2 hover:bg-gray-100 rounded-xl">👤</a>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden p-2 rounded-xl hover:bg-gray-100"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? "✖️" : "🟰️"}
                    </button>
                </div>
            </div>

            {/* Mobile nav */}
            {isOpen && (
                <nav className="md:hidden border-t bg-white px-4 py-3 space-y-3">
                    <a href="/dashboard" className="block">Dashboard</a>
                    <a href="/about" className="block">About</a>
                    <a href="/help" className="block">Help</a>
                </nav>
            )}
        </header>
    )
}