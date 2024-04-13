import React from 'react';
import InputMask from 'react-input-mask';

const LoginPage: React.FC<{ onLogin: (phone: string) => void }> = ({ onLogin }) => {
    const [phone, setPhone] = React.useState(() => {
        return localStorage.getItem('phone') || '';
    });

    const handleLogin = () => {
        localStorage.setItem('phone', phone);
        onLogin(phone);
    };

    return (
        <div className="login-page">
            <h2>Login</h2>
            <InputMask
                mask="+7 (999) 999-99-99" 
                maskChar="_"
                value={phone}
                onChange={(e: any) => setPhone(e.target.value)}
            >
                {(inputProps: any) => <input {...inputProps} placeholder="Enter phone number" />}
            </InputMask>
            <button onClick={handleLogin}>Continue</button>
        </div>
    );
};

export default LoginPage;
