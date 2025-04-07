import { Link, useMatch } from 'react-router';
import { FC } from 'react';
import { ICustomLinkProps } from '../../../common/types/layout';

const CustomLink: FC<ICustomLinkProps> = ({ children, to }) => {
    const match = useMatch({
        path: to,
        end: to.length === 1,
    });
    return (
        <Link
            to={to}
            style={{
                display: 'block',
                color: match ? 'white' : '#7C7C7C',
                backgroundColor: match ? '#1900D5' : 'transparent',
                borderRadius: '4px',
            }}
        >
            {children}
        </Link>
    );
};

export default CustomLink;
