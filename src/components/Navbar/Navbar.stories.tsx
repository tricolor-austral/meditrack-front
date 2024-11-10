import { Navbar } from './index.tsx';
import '../../index.css';
import React, { useState } from 'react';

const meta = {
  title: 'Components/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  parameters: {
    controls: {
      expanded: true,
    },
  },
  args: {
    options: [
      { label: 'Home', icon: 'home' },
      { label: 'Medics', icon: 'medic' },
      { label: 'Prescriptions', icon: 'prescriptions' },
      { label: 'Calendar', icon: 'calendar' },
    ],
  },
  argTypes: {
    options: {
      control: { type: 'object' },
    },
  },
};

export default meta;

export const Default: (args) => React.JSX.Element = (args) => {
  const [selected, setSelected] = useState(args.selected || 'Home');

  const handleChange = (value: string) => {
    setSelected(value);
    args.onChange(value);
  };

  return <Navbar {...args} selected={selected} onChange={handleChange} />;
};

Default.args = {
  selected: '1',
};
