import { Avatar, Chip } from '@mui/material';
import { ReactElement } from 'react';

type TagProps = {
    label: string;
    variant?: 'filled' | 'outlined';
    color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
    icon?: ReactElement;
    avatarName?: string;
    avatarSrc?: string;
    handleDelete?: () => void;
}

export default function Tag({ label, variant, color, icon, avatarName, avatarSrc, handleDelete } : TagProps) {
    
    return <Chip icon={icon} avatar={avatarSrc ? <Avatar alt={avatarName} src={avatarSrc}/> : avatarName ? <Avatar>{avatarName}</Avatar> : undefined} variant={variant} label={label} onDelete={handleDelete} color={color}/>
}