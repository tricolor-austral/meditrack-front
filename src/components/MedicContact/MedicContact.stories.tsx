import { MedicContact } from './index.tsx';
import { StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/MedicContact',
  component: MedicContact,
  tags: ['autodocs'],
  parameters: {
    controls: {
      expanded: true,
    },
  },
  args: {
    name: 'Dr. John Doe',
    imgSrc: 'https://randomuser.me/api/portraits',
    email: 'john@doe.com',
  },
};

export default meta;

type Story = StoryObj<typeof MedicContact>;

export const Default: Story = {
  args: {
    name: 'Dr. John Doe',
    imgSrc: 'https://randomuser.me/api/portraits',
    email: 'john@doe.com',
  },
};
