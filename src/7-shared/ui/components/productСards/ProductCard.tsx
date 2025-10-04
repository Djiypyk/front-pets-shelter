import classNames from "classnames";

type ProductCardProps = DescriptionPets & {
    variant?: "primary" | "outline" | "inline"
    className?: string
}

type DescriptionPets = {
    id: string
    img: string
    name: string
    age: number
    breed?: string
    shelter: string,
    typePet?: "all" | "cat" | "dog"
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
            <ul className="items-center justify-center w-full" id={props.id}>
                <img className="rounded-lg w-full max-h-64 object-cover" src={props.img} alt={props.name}/>
                <li className="pt-4 text-center font-medium text-gray-900">{props.name}, {props.age} года</li>
                <li className="text-center text-gray-500 text-sm">{props.breed}</li>
                <li className="text-center text-gray-500 text-sm">{props.shelter}</li>
            </ul>
        </div>
    )
}

// <div
//     data-tid="productCard"
//     className={classNames(
//         "flex flex-col items-center justify-between gap-3 w-64 h-96 p-4 rounded-xl bg-white shadow-md",
//         variantStyles[variant],
//         className
//     )}
//     {...props}
// >
//     {/* Обёртка под фиксированный размер изображения */}
//     <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-lg">
//         <img
//             className="w-full h-full object-cover"
//             src={props.img}
//             alt={props.name}
//         />
//     </div>
//
//     <div className="flex flex-col items-center text-center gap-1">
//         <p className="font-medium text-gray-900">{props.name}, {props.age} года</p>
//         <p className="text-gray-500 text-sm">{props.breed}</p>
//         <p className="text-gray-500 text-sm">{props.shelter}</p>
//     </div>
// </div>