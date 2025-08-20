export default function Button({
                                   children,
                                   variant = "primary",
                                   className = "",
                                   ...props
                               }: {
    children: React.ReactNode
    variant?: "primary" | "outline"
    className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
    const base = "px-5 py-2 text-sm rounded-full tracking-wider transition"
    const style =
        variant === "outline"
            ? "bg-white text-black border border-black hover:bg-black hover:text-white"
            : "bg-black text-white hover:bg-neutral-800"

    return (
        <button className={`${base} ${style} ${className}`} {...props}>
            {children}
        </button>
    )
}