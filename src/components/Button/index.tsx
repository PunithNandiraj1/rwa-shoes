import { FC, PropsWithChildren } from 'react';

type ButtonType = 'filled' | 'outline';

type Properties = {
    onClick?: () => void;
    variant?: ButtonType;
    className?: string;
    submit?: boolean;
};

const Button: FC<PropsWithChildren<Properties>> = ({
    onClick,
    variant = 'filled',
    children,
    className,
    submit,
}) => {
    const buttonBaseClasses = 'grid place-content-center py-3 px-3.5 rounded-lg font-bold text-lg cursor-pointer select-none transition duration-200';
    const filledClasses = 'bg-blue-500 text-white';
    const outlineClasses = 'bg-transparent border-2 border-blue-500 text-blue-500';

    // Dynamic classes based on variant
    const variantClasses = variant === 'filled' ? filledClasses : outlineClasses;

    return (
        <button
            type={submit ? 'submit' : 'button'}
            onClick={onClick}
            className={`${buttonBaseClasses} ${variantClasses} ${className || ''}`}
        >
            {children}
        </button>
    );
};

export default Button;
