
import { InputHTMLAttributes } from "react"

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    variant?: "outline" | "solid"
}

export const Input = ({ variant = "solid", ...props }: InputProps) => {


    const base = "data-tid='input' px-4 py-2 text-sm rounded-md transition outline-none"
    const style =
        variant === "outline"
            ? "border border-gray-400 text-black bg-white focus:ring-2 focus:ring-orange-500"
            : "bg-white-100 text-gray-900 border-transparent focus:ring-1 focus:ring-gray-200"

    return <input className={`${base} ${style}`} {...props} />

}