import classNames from "classnames";

type ShelterCardProps = DescriptionShelters & {
    variant?: "primary" | "outline" | "inline"
    className?: string
}

type DescriptionShelters = {
    id: string
    img: string
    name: string
    rating: number
}

export enum ShelterCardVariant {
    PRIMARY = "primary",
    OUTLINE = "outline",
    INLINE = "inline",
}

export const ShelterCard = ({
                                variant = ShelterCardVariant.PRIMARY,
                                className = '',
                                ...props
                            }: ShelterCardProps) => {


    const variantStyles = {
        primary: "bg-orange-400 text-white rounded-xl p-4 shadow-md hover:bg-orange-500 transition",
        outline: "bg-white text-black border border-gray-300 rounded-xl p-4 shadow-sm hover:bg-gray-50 hover:border-gray-400 transition",
        inline: "bg-white border border-transparent text-gray-600 rounded-lg p-3 hover:border-gray-300 hover:text-gray-800 transition",
    }

    return (
        <div
            data-tid="productCard"
            className={classNames(variantStyles[variant],
                className
            )}
            {...props}
        >
            <ul id={props.id}>
                <span>
                    <img className="rounded-lg w-full max-h-32 object-cover" src={props.img} alt={props.name}/>
                </span>
                <span>
                    <li className="pt-4 text-right font-medium text-gray-900">{props.name}</li>
                <li className="text-right text-gray-500 text-sm">{props.rating}</li>
                </span>

            </ul>
        </div>
    )
}
