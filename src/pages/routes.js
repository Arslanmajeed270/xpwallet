import React from 'react';
import {BrowserRouter as Router , Route,  withRouter} from 'react-router-dom';
import PrivateRoute from '../components/common/PrivateRoute'

import Index from './Dashboard';
import UserProfile from './Dashboard/userProfile';
import Exchange from './Exchange/exchange';
import AddBank from './Money/Recharge/addBank';
import AddCard from './Money/Recharge/addCard';
import AddMoney1 from './Money/Recharge/addMoney1';
import AddMoney2 from './Money/Recharge/addMoney2';
import ConfirmDetails from './Money/Recharge/confirmDetails';
import RecentTransaction from './Transection/recentTransaction';
import Transfer from './Transfer/transfer';
import AddXpWallet from './Transfer/addXpWallet';
import Withdraw from './withdraw/withdraw';
import TransactionDetails from './Transection/transactionDetails';
import RechargeBank from './Money/Recharge/rechargeBank';
import RechargeCard from './Money/Recharge/rechargeCard';

 

class Routes extends React.Component {

	render(){
		console.log("checking props: ", this.props);
		return (
			<Router>
				<PrivateRoute 
					exact 
					path={"/dashboard"} 
					component={Index}
				/>
				<PrivateRoute 
					exact 
					path={"/"} 
					component={Index}
				/>
				<PrivateRoute 
					exact 
					path={"/user-profile"} 
					component={UserProfile}
				/>
				<PrivateRoute 
					exact 
					path={"/add-money-1"} 
					component={AddMoney1}
				/>
				<PrivateRoute 
					exact 
					path={"/add-money-2"} 
					component={AddMoney2}
				/>
				<PrivateRoute 
					exact 
					path={"/add-bank"} 
					component={AddBank}
				/>
				<PrivateRoute 
					exact 
					path={"/add-card"} 
					component={AddCard}
				/>
				<PrivateRoute 
					exact 
					path={"/confirm-details"} 
					component={ConfirmDetails}
				/>
				<PrivateRoute 
					exact 
					path={"/exchange"} 
					component={Exchange}
				/>
				<PrivateRoute
					exact 
					path={"/recent-transaction"} 
					component={RecentTransaction}
				/>
				<PrivateRoute
					exact 
					path={"/transaction-details"} 
					component={TransactionDetails}
				/>
				<PrivateRoute
					exact 
					path={"/withdraw"} 
					component={Withdraw}
				/>
				<PrivateRoute
					exact 
					path={"/transfer"} 
					component={Transfer}
				/>
				<PrivateRoute
					exact 
					path={"/add-xp-wallet"} 
					component={AddXpWallet}
				/>
				<PrivateRoute
					exact 
					path={"/recharge-bank"} 
					component={RechargeBank}
				/>
				<PrivateRoute
					exact 
					path={"/recharge-card"} 
					component={RechargeCard}
				/>
			</Router>
		);
	}
}

export default withRouter(Routes);