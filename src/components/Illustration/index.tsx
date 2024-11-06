import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import Book from '../assets/illustrations/book.svg';
import Calendar from '../assets/illustrations/calendar.svg';
import Cancel from '../assets/illustrations/cancel.svg';
import Check from '../assets/illustrations/check.svg';
import Clock from '../assets/illustrations/clock.svg';
import ColorStar from '../assets/illustrations/color_star.svg';
import EpBlack from '../assets/illustrations/ep_black.svg';
import FilterFilled from '../assets/illustrations/filter_filled.svg';
import FilterOutlined from '../assets/illustrations/filter_outlined.svg';
import LeftArrow from '../assets/illustrations/left_arrow.svg';
import Location from '../assets/illustrations/location.svg';
import Mail from '../assets/illustrations/mail.svg';
import Meditate from '../assets/illustrations/meditate.svg';
import Pill from '../assets/illustrations/pill.svg';
import PlusSign from '../assets/illustrations/plus_sign.svg';
import RightArrow from '../assets/illustrations/right_arrow.svg';
import Star from '../assets/illustrations/star.svg';
import Trash from '../assets/illustrations/trash.svg';
import Walk from '../assets/illustrations/walk.svg';
import Warn from '../assets/illustrations/warn.svg';

type IllustrationVariant =
    | 'book'
    | 'calendar'
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
    | 'star'
    | 'trash'
    | 'walk'
    | 'warn';


const illustrationMap: Record<IllustrationVariant, string> = {
    book: Book,
    calendar: Calendar,
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
    star: Star,
    trash: Trash,
    walk: Walk,
    warn: Warn,
};

interface IllustrationsProps extends VariantProps<typeof illustrationStyles> {
    variant: IllustrationVariant;
    size?: 'small' | 'medium' | 'large';
    alt?: string;
}

const illustrationStyles = cva('flex items-center justify-center', {
    variants: {
        size: {
            small: 'w-8 h-8',
            medium: 'w-16 h-16',
            large: 'w-24 h-24',
        },
    },
    defaultVariants: {
        size: 'medium',
    },
});

const Illustrations: React.FC<IllustrationsProps> = ({ variant, size = 'medium', alt = '' }) => {
    const illustrationSrc = illustrationMap[variant];

    if (!illustrationSrc) {
        return null;
    }

    return (
        <div className={illustrationStyles({ size })}>
            <img src={illustrationSrc} alt={alt || variant} className="w-full h-full" />
        </div>
    );
};

export default Illustrations;
