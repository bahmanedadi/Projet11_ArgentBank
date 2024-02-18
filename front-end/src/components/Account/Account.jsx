import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Account = props => {
  return (
    <section className={`account ${props.editing ? 'editing' : ''}`}>
      <div className="account-content-wrapper">
        <h2 className="account-title">{props.title}</h2>
        <p className="account-amount">{props.amount}</p>
        <p className="account-amount-description">{props.description}</p>
      </div>
      {props.editing ? (
                <FontAwesomeIcon icon={faChevronRight} className="chevron-icon" />
            ) : (
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button></div>
            )}
    </section>
  )
}

Account.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.number,
  description: PropTypes.string
}

export default Account;