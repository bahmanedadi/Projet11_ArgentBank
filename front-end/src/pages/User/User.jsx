import { dataAccounts } from "../../data/data";
import Account from "../../components/Account/Account";
function User() {
    
    return (
        <div>
            <div className="main bg-dark">
                <div className="header">
                    <h1>Welcome back</h1>
                   
                </div>
                <h2 className="sr-only">Accounts</h2>
                {dataAccounts.map(dataAccount =>
                    <Account
                        accountTitle={dataAccount.accountTitle}
                        accountAmount={dataAccount.accountAmount}
                        accountAmountDescription={dataAccount.accountAmountDescription}
                        key={dataAccount.id}
                    />
                )}
            </div>
        </div>
    )
}



export default User;