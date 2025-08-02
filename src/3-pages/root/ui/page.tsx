import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { PATH_PAGE } from '@/7-shared/lib/router'

export const RootPage = () => {
    const [count, setCount] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)
    const navigate = useNavigate()

    const handleCountClick = () => {
        if (isAnimating) {
            setIsAnimating(false)
        }
        setCount(count + 1)
        setIsAnimating(true)

        setTimeout(() => {
            setIsAnimating(false)
        }, 2000)

    }

    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-2xl border border-gray-100">
                <div className="text-center mb-8">
                    <h1
                        className={`text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 transition-transform duration-2000 ${isAnimating ? 'animate-ping' : ''
                            }`}
                    >
                        Vite + React
                    </h1>
                    <p className="text-gray-500 text-sm">Modern React Application</p>
                </div>

                <div className="space-y-4">
                    <button
                        onClick={handleCountClick}
                        className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg active:scale-95"
                    >
                        Count: {count} ✨
                    </button>

                    <button
                        onClick={() => navigate(PATH_PAGE.second)}
                        className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg active:scale-95"
                    >
                        Navigate to Second 🚀
                    </button>
                </div>
            </div>
        </div>
    )
}