import classNames from 'classnames';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode
    variant?: "primary" | "outline"
    className?: string
}

export enum ButtonVariant {
    PRIMARY = "primary",
    OUTLINE = "outline",
}

export const Button = ({ children, variant = ButtonVariant.PRIMARY, className = "", ...props }: ButtonProps) => {
    const baseStyles = "px-5 py-2 text-sm rounded-full tracking-wider transition"

    const variantStyles = {
        primary: "bg-orange-500 text-white border border-orange-500 hover:bg-white hover:text-orange-500 ring-4 ring-yellow-500 ring-opacity-50",
        outline: "bg-white text-black border border-gray-300 hover:bg-black hover:text-white"
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