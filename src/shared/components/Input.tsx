import InputProps from '../values/InputProps';

const Input: React.FC<InputProps> = ({ icon, iconPosition, ...rest }) => {
    const renderIcon = () => {
        if (typeof icon === 'string') {
            return <img src={icon} alt="icon" style={{ width: '20px', height: '20px' }} />;
        }
        return icon;
    };

    return (
        <div style={{ position: 'relative', margin: '20px' }}>
            {iconPosition === 'left' && icon && (
                <div style={{ position: 'absolute', left: '8px', top: '50%', transform: 'translateY(-50%)' }}>
                    {renderIcon()}
                </div>
            )}
            <input
                {...rest}
                style={{
                    paddingLeft: iconPosition === 'left' && icon ? '30px' : '10px',
                    paddingRight: iconPosition === 'right' && icon ? '30px' : '10px',
                    width: '100%',
                    boxSizing: 'border-box',
                    height: '40px',
                    borderRadius: '4px',
                    border: '1px solid #ccc'
                }}
            />
            {iconPosition === 'right' && icon && (
                <div style={{ position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)' }}>
                    {renderIcon()}
                </div>
            )}
        </div>
    );
};

export default Input;

