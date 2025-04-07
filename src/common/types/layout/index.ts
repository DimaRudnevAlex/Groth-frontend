import { ReactNode } from 'react';

export interface ILayoutProps {
    children: ReactNode;
}

export interface ICustomLinkProps {
    children: ReactNode;
    to: string;
}
