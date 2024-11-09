import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

// Definición de estilos de tipografía usando cva
const typographyStyles = cva('flex items-center align-middle', {
    variants: {
        font: {
            h1: 'font-montserrat font-bold text-60px',
            h2: 'font-montserrat font-bold text-48px',
            h3: 'font-montserrat font-medium text-46px',
            subtitle: 'font-montserrat font-medium text-28px',
            bb1: 'font-montserrat font-bold text-18px',
            br1: 'font-montserrat font-regular text-18px',
            bb2: 'font-montserrat font-bold text-16px',
            br2: 'font-montserrat font-regular text-16px',
            b3: 'font-montserrat font-regular text-12px',
            b4: 'font-montserrat font-regular text-10px',
        },
    },
    defaultVariants: {
        font: 'h1', // Valor predeterminado para el estilo de fuente
    },
});

interface TypographyProps extends VariantProps<typeof typographyStyles> {
    children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({ font, children }) => (
    <div className={typographyStyles({ font })}>
        {children}
    </div>
);

export default Typography;
