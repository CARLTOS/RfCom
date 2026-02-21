import { ButtonHTMLAttributes, forwardRef } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className = '', variant = 'primary', size = 'md', ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center font-bold tracking-tight transition-all duration-300 active:scale-95";

        const variants = {
            primary: "btn-premium",
            secondary: "bg-white text-[#1d335a] hover:bg-[#CBD5E1]",
            outline: "btn-outline-premium",
        };

        const sizes = {
            sm: "px-4 py-2 text-xs rounded-full",
            md: "px-6 py-3 text-sm rounded-full",
            lg: "px-10 py-4 text-base rounded-full",
        };

        const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

        return (
            <button ref={ref} className={classes} {...props}>
                {props.children}
            </button>
        );
    }
);

Button.displayName = 'Button';

export { Button };

