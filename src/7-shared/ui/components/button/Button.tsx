type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode
    variant?: "primary" | "outline"
    className?: string
}

export default function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
    const base = "px-5 py-2 text-sm rounded-full tracking-wider transition"

    const style =
        variant === "outline"
            ? "bg-white text-black border border-black hover:bg-black hover:text-white"
            : "bg-orange-500 text-white border border-orange-500 hover:bg-white hover:text-orange-500 ring-4 ring-yellow-500 ring-opacity-50"

    return (
        <button
            data-tid="button"
            className={`${base} ${style} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}