import { Tabs } from './index.tsx';
import '../../index.css';
import React, { useState } from 'react';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    controls: {
      expanded: true,
    },
  },
  args: {
    options: [
      { label: 'Tab 1', value: '1' },
      { label: 'Tab 2', value: '2' },
      { label: 'Tab 3', value: '3' },
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
  const [selected, setSelected] = useState(args.selected || '1');

  const handleChange = (value: string) => {
    setSelected(value);
    args.onChange(value);
  };

  return <Tabs {...args} selected={selected} onChange={handleChange} />;
};

Default.args = {
  selected: '1',
};
