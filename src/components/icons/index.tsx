import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import Calendar from '../../assets/icons/calendar.svg';
import Close from '../../assets/icons/close.svg';
import Home from '../../assets/icons/home.svg';
import Logout from '../../assets/icons/logout.svg';
import Prescriptions from '../../assets/icons/prescriptions.svg';
import PropertySelected from '../../assets/icons/property 1=selected.svg';
import Star from '../../assets/icons/star.svg';
import User from '../../assets/icons/user.svg';

type IconVariant =
    | 'calendar'
    | 'close'
    | 'home'
    | 'logout'
    | 'prescriptions'
    | 'property_selected'
    | 'star'
    | 'user';

const iconMap: any = {
    calendar: Calendar,
    close: Close,
    home: Home,
    logout: Logout,
    prescriptions: Prescriptions,
    property_selected: PropertySelected,
    star: Star,
    user: User,
};

const iconStyles = cva('flex items-center justify-center', {
    variants: {
        size: {
            small: 'w-4 h-4',
            medium: 'w-6 h-6',
            large: 'w-8 h-8',
        },
    },
    defaultVariants: {
        size: 'medium',
    } as const,
});

interface IconProps extends VariantProps<typeof iconStyles> {
    variant: IconVariant;
    size?: 'small' | 'medium' | 'large'; // Explicitly define size prop type
    alt?: string;
}

export const Icon: React.FC<IconProps> = ({ variant, size = 'medium', alt = '' }) => {
    const iconComponent = iconMap[variant];

    if (!iconComponent) {
        return null;
    }

    return (
        <div className={iconStyles({ size })} aria-label={alt}>
            <img src={iconComponent} className="w-full h-full" aria-hidden={alt ? 'false' : 'true'} />
        </div>
    );
};

export { iconMap };
