import { HTMLAttributes, forwardRef } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    hoverEffect?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className = '', hoverEffect = true, ...props }, ref) => {
        const classes = `premium-card p-1 ${className}`;

        return (
            <div ref={ref} className={classes} {...props}>
                <div className="relative z-10 w-full h-full">
                    {props.children}
                </div>
            </div>
        );
    }
);

Card.displayName = 'Card';

export { Card };

