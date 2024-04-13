import React from 'react';
import UserInformation from '../values/UserInformation';
import Input from './Input'

interface HeaderProps {
    user: UserInformation;
}

const Header: React.FC<HeaderProps> = ({ user }) => {
    return (
        <header className="header">
            <div className='header-content'>
                <h2>Welcome {user.name} {user.surname}</h2>
            </div>
            <div className='header-content'>
                <Input icon="../../assests/search-svgrepo-com.svg" iconPosition="left" placeholder="Search" />
                <img src="../../assests/qr-code-svgrepo-com.svg"></img>
            </div>
        </header>
    );
};

export default Header;

