import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { ReactComponent as Book } from '../../assets/illustrations/book.svg';
import { ReactComponent as Calendar } from '../../assets/illustrations/calendar.svg';
import { ReactComponent as Cancel } from '../../assets/illustrations/cancel.svg';
import { ReactComponent as Check } from '../../assets/illustrations/check.svg';
import { ReactComponent as Clock } from '../../assets/illustrations/clock.svg';
import { ReactComponent as ColorStar } from '../../assets/illustrations/color_star.svg';
import { ReactComponent as EpBlack } from '../../assets/illustrations/ep_black.svg';
import { ReactComponent as FilterFilled } from '../../assets/illustrations/filter_filled.svg';
import { ReactComponent as FilterOutlined } from '../../assets/illustrations/filter_outlined.svg';
import { ReactComponent as LeftArrow } from '../../assets/illustrations/left_arrow.svg';
import { ReactComponent as Location } from '../../assets/illustrations/location.svg';
import { ReactComponent as Mail } from '../../assets/illustrations/mail.svg';
import { ReactComponent as Meditate } from '../../assets/illustrations/meditate.svg';
import { ReactComponent as Pill } from '../../assets/illustrations/pill.svg';
import { ReactComponent as PlusSign } from '../../assets/illustrations/plus_sign.svg';
import { ReactComponent as RightArrow } from '../../assets/illustrations/right_arrow.svg';
import { ReactComponent as Star } from '../../assets/illustrations/star.svg';
import { ReactComponent as Trash } from '../../assets/illustrations/trash.svg';
import { ReactComponent as Walk } from '../../assets/illustrations/walk.svg';
import { ReactComponent as Warn } from '../../assets/illustrations/warn.svg';

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

interface IllustrationsProps extends VariantProps<typeof illustrationStyles> {
  variant: IllustrationVariant;
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'error' | 'black' | 'white';
}

const illustrationStyles = cva(
  'flex items-center justify-center align-middle',
  {
    variants: {
      size: {
        small: 'w-8 h-8',
        medium: 'w-16 h-16',
        large: 'w-24 h-24',
      },
      color: {
        primary: 'fill-primary',
        secondary: 'fill-secondary',
        error: 'fill-error',
        black: 'fill-black',
        white: 'fill-white',
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  }
);

const Illustrations: React.FC<IllustrationsProps> = ({
  variant,
  size = 'medium',
  color = 'black',
}) => {
  switch (variant) {
    case 'book':
      return <Book className={illustrationStyles({ size, color })} />;
    case 'calendar':
      return <Calendar className={illustrationStyles({ size, color })} />;
    case 'cancel':
      return <Cancel className={illustrationStyles({ size, color })} />;
    case 'check':
      return <Check className={illustrationStyles({ size, color })} />;
    case 'clock':
      return <Clock className={illustrationStyles({ size, color })} />;
    case 'color_star':
      return <ColorStar className={illustrationStyles({ size, color })} />;
    case 'ep_black':
      return <EpBlack className={illustrationStyles({ size, color })} />;
    case 'filter_filled':
      return <FilterFilled className={illustrationStyles({ size, color })} />;
    case 'filter_outlined':
      return <FilterOutlined className={illustrationStyles({ size, color })} />;
    case 'left_arrow':
      return <LeftArrow className={illustrationStyles({ size, color })} />;
    case 'location':
      return <Location className={illustrationStyles({ size, color })} />;
    case 'mail':
      return <Mail className={illustrationStyles({ size, color })} />;
    case 'meditate':
      return <Meditate className={illustrationStyles({ size, color })} />;
    case 'pill':
      return <Pill className={illustrationStyles({ size, color })} />;
    case 'plus_sign':
      return <PlusSign className={illustrationStyles({ size, color })} />;
    case 'right_arrow':
      return <RightArrow className={illustrationStyles({ size, color })} />;
    case 'star':
      return <Star className={illustrationStyles({ size, color })} />;
    case 'trash':
      return <Trash className={illustrationStyles({ size, color })} />;
    case 'walk':
      return <Walk className={illustrationStyles({ size, color })} />;
    case 'warn':
      return <Warn className={illustrationStyles({ size, color })} />;
  }
};

export default Illustrations;
