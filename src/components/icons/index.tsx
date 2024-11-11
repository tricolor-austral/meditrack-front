import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { ReactComponent as Calendar } from '../../assets/icons/calendar.svg';
import { ReactComponent as Close } from '../../assets/icons/close.svg';
import { ReactComponent as Home } from '../../assets/icons/home.svg';
import { ReactComponent as Logout } from '../../assets/icons/logout.svg';
import { ReactComponent as Prescriptions } from '../../assets/icons/prescriptions.svg';
import { ReactComponent as PropertySelected } from '../../assets/icons/property 1=selected.svg';
import { ReactComponent as Star } from '../../assets/icons/star.svg';
import { ReactComponent as User } from '../../assets/icons/user.svg';
import { ReactComponent as Book } from '../../assets/icons/book.svg';
import { ReactComponent as Cancel } from '../../assets/icons/cancel.svg';
import { ReactComponent as Check } from '../../assets/icons/check.svg';
import { ReactComponent as Clock } from '../../assets/icons/clock.svg';
import { ReactComponent as ColorStar } from '../../assets/icons/color_star.svg';
import { ReactComponent as EpBlack } from '../../assets/icons/ep_black.svg';
import { ReactComponent as FilterFilled } from '../../assets/icons/filter_filled.svg';
import { ReactComponent as FilterOutlined } from '../../assets/icons/filter_outlined.svg';
import { ReactComponent as LeftArrow } from '../../assets/icons/left_arrow.svg';
import { ReactComponent as Location } from '../../assets/icons/location.svg';
import { ReactComponent as Mail } from '../../assets/icons/mail.svg';
import { ReactComponent as Meditate } from '../../assets/icons/meditate.svg';
import { ReactComponent as Pill } from '../../assets/icons/pill.svg';
import { ReactComponent as PlusSign } from '../../assets/icons/plus_sign.svg';
import { ReactComponent as RightArrow } from '../../assets/icons/right_arrow.svg';
import { ReactComponent as Trash } from '../../assets/icons/trash.svg';
import { ReactComponent as Walk } from '../../assets/icons/walk.svg';
import { ReactComponent as Warn } from '../../assets/icons/warn.svg';
import { ReactComponent as Medic } from '../../assets/icons/medics.svg';

type IconVariant =
    | 'calendar'
    | 'close'
    | 'home'
    | 'logout'
    | 'prescriptions'
    | 'property_selected'
    | 'star'
    | 'user'
    | 'book'
    | 'cancel'
    | 'check'
    | 'clock'
    | 'color_star'
    | 'ep_black'
    | 'filter_filled'
    | 'filter_outlined'
    | 'left_arrow'
    | 'location'
    | 'mail'
    | 'meditate'
    | 'pill'
    | 'plus_sign'
    | 'right_arrow'
    | 'trash'
    | 'walk'
    | 'medic'
    | 'warn';

const iconMap: Record<IconVariant, React.FC<React.SVGProps<SVGSVGElement>>> = {
    calendar: Calendar,
    close: Close,
    home: Home,
    logout: Logout,
    prescriptions: Prescriptions,
    property_selected: PropertySelected,
    star: Star,
    user: User,
    book: Book,
    cancel: Cancel,
    check: Check,
    clock: Clock,
    color_star: ColorStar,
    ep_black: EpBlack,
    filter_filled: FilterFilled,
    filter_outlined: FilterOutlined,
    left_arrow: LeftArrow,
    location: Location,
    mail: Mail,
    meditate: Meditate,
    pill: Pill,
    plus_sign: PlusSign,
    right_arrow: RightArrow,
    trash: Trash,
    walk: Walk,
    warn: Warn,
    medic: Medic,
};

const iconStyles = cva('flex items-center align-middle', {
    variants: {
        size: {
            small: 'w-6 h-6',
            medium: 'w-8 h-8',
            large: 'w-12 h-12',
        },
    },
    defaultVariants: {
        size: 'medium',
    } as never,
});

interface IconProps extends VariantProps<typeof iconStyles> {
    variant: IconVariant;
    color?: string; // Expecting a Tailwind color class like 'text-primary'
    className?: string;
}

export const Icon: React.FC<IconProps> = ({
                                              variant,
                                              size = 'medium',
                                              color = 'text-black',
                                              className,
                                          }) => {
    const IconComponent = iconMap[variant];

    if (!IconComponent) {
        return null;
    }

    return (
        <div className={`${iconStyles({ size })} ${color} ${className}`}>
            <IconComponent className="w-full h-full" />
        </div>
    );
};

export { iconMap };
