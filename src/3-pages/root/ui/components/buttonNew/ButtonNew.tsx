import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    color: string;
    disabledColor: string
    variantColor: string
    children?: React.ReactNode;
};


export const ButtonNew = ({ onClick, color, title, children, disabled, disabledColor, ...restProps }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: disabled ? disabledColor : color,
                cursor: disabled ? 'not-allowed' : 'pointer'
            }}
            {...restProps}
        >
            {title || children}
        </button>
    );
};