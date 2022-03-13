import logo from './twitter-logo.png';
import logo2x from './twitter-logo2x.png';
import PropTypes from 'prop-types';

function Logo({width, height, className, alt}) {
    return (
        <img src={logo} alt={alt} className={className} srcSet={`${logo} 1x, ${logo2x} 2x`} width={width} height={height} />
    )
}

Logo.defaultProps = {
    width: 50,
    height: 41,
    alt: 'Twitter Logo',
}

Logo.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    className: PropTypes.string.isRequired,
    alt: PropTypes.string,
}

export default Logo;