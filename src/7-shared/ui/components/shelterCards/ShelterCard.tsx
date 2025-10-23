import classNames from "classnames";
import {Button} from "@/7-shared/ui";

type ShelterCardProps = DescriptionPets & {
    variant?: "primary" | "outline" | "inline"
    className?: string
}

type DescriptionPets = {
    id: string
    img: string
    name: string
    rating: number
}

export enum CardVariant {
    PRIMARY = "primary",
    OUTLINE = "outline",
    INLINE = "inline",
}

export const ShelterCard = ({
                                variant = CardVariant.PRIMARY,
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
            className={classNames(
                "flex flex-col items-center justify-center",
                variantStyles[variant],
                className
            )}
            {...props}
        >

            <img className="rounded-lg w-full max-h-64 object-cover" src={props.img} alt={props.name}/>
            <div className="flex justify-between">

                <span className="flex gap-2 pb-2 justify-start max-w-2/3">
  <ul className="items-center justify-center w-full" id={props.id}>
                <li className="pt-2 pb-1 font-medium text-gray-900">{props.name}</li>

            </ul>
            </span>
                <span className="flex gap-2 justify-end max-w-1/3">
<Button className={'items-end-safe'} children={'♡'} variant={'circle'}/>
                    </span>
            </div>
        </div>
    )
}
