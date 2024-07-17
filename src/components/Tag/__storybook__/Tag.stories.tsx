import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Tag from '..';
import FaceIcon from '@mui/icons-material/Face';

const meta = {
    title: 'Basic Components/Tag',
    component: Tag,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: { summary: 'filed | outlined' },
        color: { summary: 'default | primary | secondary | error | info | success | warning'},
        handleDelete: fn()
    }
} satisfies Meta<typeof Tag>

export default meta;

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        label: 'Default'
    }
}

export const Outlined: Story = {
    args: {
        label: 'Outlined',
        variant: 'outlined'
    }
}

export const Primary: Story = {
    args: {
        label: 'Primary',
        color: 'primary'
    }
}

export const Secondary: Story = {
    args: {
        label: 'Secondary',
        color: 'secondary'
    }
}

export const Error: Story = {
    args: {
        label: 'Error',
        color: 'error'
    }
}

export const Info: Story = {
    args: {
        label: 'Info',
        color: 'info'
    }
}

export const Success: Story = {
    args: {
        label: 'Success',
        color: 'success'
    }
}

export const Warning: Story = {
    args: {
        label: 'Warning',
        color: 'warning'
    }
}

export const AvatarName: Story = {
    args: {
        label: 'With Avatar Name',
        avatarName: 'LB'
    }
}

export const AvatarPhoto: Story = {
    args: {
        label: 'With Avatar Photo',
        avatarName: 'LB',
        avatarSrc: 'https://cdn-icons-png.flaticon.com/512/5556/5556499.png'
    }
}

export const Icon: Story = {
    args: {
        label: 'With Icon',
        icon: <FaceIcon />
    }
}

export const Deletable: Story = {
    args: {
        label: 'Deletable',
        handleDelete: () => {console.log('deleted')}
    }
}