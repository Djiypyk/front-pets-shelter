import {ButtonHTMLAttributes} from "react";
import classNames from "classnames";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode
    variant?: "primary" | "outline" | "inline"
    className?: string
}

export enum ButtonVariant {
    PRIMARY = "primary",
    OUTLINE = "outline",
    INLINE = "inline",
}

export const Button = ({children, variant = ButtonVariant.PRIMARY, className = "", ...props}: ButtonProps) => {
    const baseStyles = "px-5 py-2 text-sm rounded-full tracking-wider transition"

    const variantStyles = {
        primary: "bg-orange-400 text-white hover:bg-orange-500 hover:text-white-500 ring-opacity-50",
        outline: "bg-white text-gray-900 border border-gray-300 hover:bg-gray-900 hover:text-white ",
        inline: "border border-transparent text-gray-600 hover:border-gray-300 hover:text-black px-3 py-1",
    }
    return (
        <button
            data-tid="button"
            className={classNames(baseStyles, variantStyles[variant], className)}
            {...props}
        >
            {children}
        </button>
    )
}