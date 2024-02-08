
import React from 'react';
import { useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';

function Account({ accountTitle, accountAmount, accountAmountDescription  })  {
    const selectTheme = (state) => state.theme
    const theme = useSelector(selectTheme)
 
    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank {accountTitle}</h3>
                <p className="account-amount">${accountAmount}</p>
                <p className="account-amount-description">{accountAmountDescription } </p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </section>
    )
}
Account.propTypes = {
    accountTitle: PropTypes.string,
    accountAmount: PropTypes.number,
    accountAmountDescription: PropTypes.string
}

export default Account;