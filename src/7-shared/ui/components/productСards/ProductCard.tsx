import classNames from "classnames";

type ProductCardProps = DescriptionPets & {
    variant?: "primary" | "outline"
    className?: string
}

type DescriptionPets = {
    img: string
    name: string,
    age: string,
    shelter: string,
}

export enum ProductCardVariant {
    PRIMARY = "primary",
    OUTLINE = "outline",
}

export const ProductCard = ({
                                variant = ProductCardVariant.PRIMARY,
                                className = '',
                                ...props
                            }: ProductCardProps) => {


    const variantStyles = {
        primary: "group border border-gray-200 p-4 rounded-lg hover:bg-white hover:shadow-lg hover:border-transparent max-w-64",
        outline: "group border border-indigo-500 p-4 rounded-lg hover:bg-white hover:shadow-lg hover:border-transparent max-w-80"
    }

    return (
        <div
            data-tid="productCard"
            className={classNames(variantStyles[variant], className)}
            {...props}>
            <div style={variantStyles}>
                <img className={'rounded-lg'} style={{display: "flex", justifyContent: 'center', alignItems: 'center'}}
                     src={props.img}/>
                <p className="text-indigo-600 group-hover:text-gray-900 pt-2">{props.name}, {props.age} года</p>
                <p className="text-indigo-500 group-hover:text-gray-500">{props.shelter}</p>
            </div>
        </div>
    );
};
