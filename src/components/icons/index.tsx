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
import Book from '../../assets/icons/book.svg';
import Cancel from '../../assets/icons/cancel.svg';
import Check from '../../assets/icons/check.svg';
import Clock from '../../assets/icons/clock.svg';
import ColorStar from '../../assets/icons/color_star.svg';
import EpBlack from '../../assets/icons/ep_black.svg';
import FilterFilled from '../../assets/icons/filter_filled.svg';
import FilterOutlined from '../../assets/icons/filter_outlined.svg';
import LeftArrow from '../../assets/icons/left_arrow.svg';
import Location from '../../assets/icons/location.svg';
import Mail from '../../assets/icons/mail.svg';
import Meditate from '../../assets/icons/meditate.svg';
import Pill from '../../assets/icons/pill.svg';
import PlusSign from '../../assets/icons/plus_sign.svg';
import RightArrow from '../../assets/icons/right_arrow.svg';
import Trash from '../../assets/icons/trash.svg';
import Walk from '../../assets/icons/walk.svg';
import Warn from '../../assets/icons/warn.svg';
import Medic from '../../assets/icons/medics.svg';

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

const iconMap: any = {
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
  size?: 'small' | 'medium' | 'large';
  alt?: string;
  color?: string;
}

export const Icon: React.FC<IconProps> = ({
  variant,
  size = 'medium',
  alt = '',
}) => {
  const IconComponent = iconMap[variant];

  if (!IconComponent) {
    return null;
  }

  return (
    <div className={iconStyles({ size })} aria-label={alt}>
      <img
        src={IconComponent}
        className="w-full h-full"
        alt={alt}
        aria-hidden={alt ? 'false' : 'true'}
      />
    </div>
  );
};

export { iconMap };
