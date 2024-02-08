import { PropTypes } from 'prop-types';

function Feature(props) {
    const icon = props.icon;
    const altImg = props.altImg;
    const textH3 = props.textH3;
    const textP = props.textP;
    return (
        <div className="feature-item">
            <img src={icon} alt={altImg} className="feature-icon" />
            <h3 className="feature-item-title">{textH3}</h3>
            <p>{textP}</p>
        </div>
    )
}

Feature.propTypes = {
    icon: PropTypes.string,
    altImg: PropTypes.string,
    textH3: PropTypes.string,
    textP: PropTypes.string
}

export default Feature;