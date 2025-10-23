import {InputHTMLAttributes} from "react"

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    variant?: "outline" | "solid"
}

export const Input = ({variant = "solid", ...props}: InputProps) => {


    const base = "data-tid='input' px-4 py-3 rounded-full transition outline-none w-77"
    const style =
        variant === "outline"
            ? "mt-4 border border-gray-300 text-black bg-white focus:ring-1 focus:ring-orange-600"
            : "mt-4 bg-white-100 text-gray-900 border-transparent focus:ring-1 focus:ring-gray-200"

    return <input className={`${base} ${style}`} {...props}/>
}