import {ButtonHTMLAttributes} from "react";
import classNames from "classnames";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode
    variant?: "primary" | "outline" | "inline" | "circle"
    className?: string
}

export enum ButtonVariant {
    PRIMARY = "primary",
    OUTLINE = "outline",
    INLINE = "inline",
    CIRCLE = "circle",
}

export const Button = ({children, variant = ButtonVariant.PRIMARY, className = "", ...props}: ButtonProps) => {
    const baseStyles = " text-sm rounded-full tracking-wider transition m-1"

    const variantStyles = {
        primary: "px-8 py-4 bg-orange-600 text-white hover:bg-gray-800 hover:text-white-500 ring-opacity-50",
        outline: "px-8 py-4 bg-white text-gray-800 border border-gray-300 hover:bg-gray-900 hover:text-white",
        inline: "px-8 py-4 border border-gray-300 text-gray-600 hover:border-gray-800 hover:text-gray-800 px-3 py-1",
        circle: "p-4 bg-white text-gray-900 border border-gray-300 hover:bg-gray-900 hover:text-white aspect-square flex items-center justify-center",

    }
    return (
        <button
            data-tid="button"
            className={classNames(baseStyles, variantStyles[variant], className)}
            {...props}
        >{children}</button>
    )
}