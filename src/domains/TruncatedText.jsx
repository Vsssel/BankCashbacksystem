import PropTypes from 'prop-types';

const TruncatedText = ({ text, lines = 2, className, width }) => {
    const containerStyle = {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: lines,
        WebkitBoxOrient: 'vertical',
        maxWidth: `${width}px`
    };

    return (
        <span className={className} style={containerStyle}>
            {text}
        </span>
    );
};

TruncatedText.propTypes = {
    text: PropTypes.string.isRequired,
    lines: PropTypes.number,
    className: PropTypes.string,
    width: PropTypes.number.isRequired
};

export default TruncatedText;
