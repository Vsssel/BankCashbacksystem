import React from 'react';
import UserInformation from '../values/UserInformation';

interface HeaderProps {
    user: UserInformation;
}

const Header: React.FC<HeaderProps> = ({ user }) => {
    return (
        <header className="header">
            <div>
                <p>Full name: {user.name} {user.surname}</p>
            </div>
        </header>
    );
};

export default Header;

