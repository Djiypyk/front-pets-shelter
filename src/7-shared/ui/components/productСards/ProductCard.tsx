import classNames from "classnames";

type ProductCardProps = DescriptionPets & {
    variant?: "primary" | "outline" | "inline"
    className?: string
}

type DescriptionPets = {
    img: string
    name: string
    age: string
    shelter: string
}

export enum ProductCardVariant {
    PRIMARY = "primary",
    OUTLINE = "outline",
    INLINE = "inline",
}

export const ProductCard = ({
                                variant = ProductCardVariant.PRIMARY,
                                className = '',
                                ...props
                            }: ProductCardProps) => {

    const variantStyles = {
        primary: "bg-orange-400 text-white rounded-xl p-4 shadow-md hover:bg-orange-500 transition",
        outline: "bg-white text-black border border-gray-300 rounded-xl p-4 shadow-sm hover:bg-gray-50 hover:border-gray-400 transition",
        inline: "bg-white border border-transparent text-gray-600 rounded-lg p-3 hover:border-gray-300 hover:text-gray-800 transition",
    }

    return (
        <div
            data-tid="productCard"
            className={classNames(
                "flex flex-col items-center justify-center gap-3",
                variantStyles[variant],
                className
            )}
            {...props}
        >
            <div className="flex items-center justify-center w-full">
                <img className="rounded-lg w-full h-64 object-cover" src={props.img} alt={props.name} />
            </div>
            <p className="text-center font-medium text-gray-900">{props.name}, {props.age} года</p>
            <p className="text-center text-gray-500 text-sm">{props.shelter}</p>
        </div>
    )
}