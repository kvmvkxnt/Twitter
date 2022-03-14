import '../../../bootstrap-icons/font/bootstrap-icons.scss';
import PropTypes from 'prop-types';

function MenuIcons({icon, active}) {
    if (icon === 'home') {
        return <i className={`bi bi-house${active ? '-fill' : ''}`}></i>
    }

    if (icon === 'explore') {
        return <i className="bi bi-hash"></i>
    }

    if (icon === 'notify') {
        return <i className={`bi bi-bell${active ? '-fill' : ''}`}></i>
    }

    if (icon === 'message') {
        return <i className={`bi bi-envelope${active ? '-fill' : ''}`}></i>
    }

    if (icon === 'bookmark') {
        return <i className={`bi bi-bookmark${active ? '-fill' : ''}`}></i>
    }

    if (icon === 'list') {
        return <i className="bi bi-list"></i>
    }

    if (icon === 'profile') {
        return <i className={`bi bi-person${active ? '-fill' : ''}`}></i>
    }

    if (icon === 'more') {
        return <i className={`bi bi-info-circle${active ? '-fill' : ''}`}></i>
    }
}

MenuIcons.propTypes = {
    icon: PropTypes.string.isRequired,
    active: PropTypes.bool,
}

MenuIcons.defaultProps = {
    active: false,
}

export default MenuIcons;