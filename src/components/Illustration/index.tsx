import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

// Importar iconos de Material Icons
import BookIcon from '@mui/icons-material/Book';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckIcon from '@mui/icons-material/Check';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarIcon from '@mui/icons-material/Star';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import MedicationIcon from '@mui/icons-material/Medication';
import AddIcon from '@mui/icons-material/Add';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import WarningIcon from '@mui/icons-material/Warning';

// Tipo de variantes de iconos
type IllustrationVariant =
    | 'book'
    | 'calendar'
    | 'cancel'
    | 'check'
    | 'clock'
    | 'color_star'
    | 'filter_filled'
    | 'filter_outlined'
    | 'left_arrow'
    | 'location'
    | 'mail'
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
  color?: 'primary' | 'secondary' | 'error' | 'warn' | 'black' | 'white';
}

// Estilos del componente
const illustrationStyles = cva('flex items-center justify-center align-middle', {
  variants: {
    size: {
      small: 'w-8 h-8',
      medium: 'w-16 h-16',
      large: 'w-24 h-24',
    },
    color: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      error: 'text-red',
      warn: 'text-yellow',
      black: 'text-black',
      white: 'text-white',
    },
  },
  defaultVariants: {
    size: 'medium',
    color: 'black',
  },
});

// Componente principal
const Illustrations: React.FC<IllustrationsProps> = ({
   variant,
   size = 'medium',
   color = 'black',
  }) => {
  const IconComponent = () => {
    switch (variant) {
      case 'book':
        return <BookIcon sx={{ width: '100%', height: '100%' }}/>;
      case 'calendar':
        return <CalendarTodayIcon sx={{ width: '100%', height: '100%' }}/>;
      case 'cancel':
        return <CancelIcon sx={{ width: '100%', height: '100%' }}/>;
      case 'check':
        return <CheckIcon sx={{ width: '100%', height: '100%' }}/>;
      case 'clock':
        return <AccessTimeIcon sx={{ width: '100%', height: '100%' }}/>;
      case 'color_star':
        return <StarIcon sx={{ width: '100%', height: '100%' }}/>;
      case 'filter_filled':
        return <FilterAltIcon sx={{ width: '100%', height: '100%' }}/>;
      case 'filter_outlined':
        return <FilterAltIcon sx={{ width: '100%', height: '100%' }}/>;
      case 'left_arrow':
        return <ArrowRightAltIcon style={{ transform: 'rotate(180deg)' }} sx={{ width: '100%', height: '100%' }}/>;
      case 'location':
        return <LocationOnIcon sx={{ width: '100%', height: '100%' }}/>;
      case 'mail':
        return <EmailIcon sx={{ width: '100%', height: '100%' }}/>;
      case 'pill':
        return <MedicationIcon sx={{ width: '100%', height: '100%' }}/>;
      case 'plus_sign':
        return <AddIcon sx={{ width: '100%', height: '100%' }}/>;
      case 'right_arrow':
        return <ArrowRightAltIcon sx={{ width: '100%', height: '100%' }}/>;
      case 'star':
        return <StarIcon sx={{ width: '100%', height: '100%' }}/>;
      case 'trash':
        return <DeleteIcon sx={{ width: '100%', height: '100%' }}/>;
      case 'walk':
        return <DirectionsWalkIcon sx={{ width: '100%', height: '100%' }}/>;
      case 'warn':
        return <WarningIcon sx={{ width: '100%', height: '100%' }}/>;
      default:
        return null;
    }
  };

  return (
      <div className={illustrationStyles({ size, color })}>
        <IconComponent />
      </div>
  );
};

export default Illustrations;
