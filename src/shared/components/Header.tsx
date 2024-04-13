import React from 'react';
import UserInformation from '../values';

interface HeaderProps {
    user: UserInformation;
}

const Header: React.FC<HeaderProps> = ({ user }) => {
    return (
        <header className="header">
            <div>
                <p>Total Amount: {user.totalAmount}</p>
            </div>
            <div>
                <p>Full name: {user.name} {user.surname}</p>
            </div>
        </header>
    );
}

export default Header;

