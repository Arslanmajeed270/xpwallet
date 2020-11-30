import React from 'react';
import {BrowserRouter as Router , Route,  withRouter} from 'react-router-dom';
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
				<Route  
					exact 
					path={"/dashboard"} 
					component={Index}
				/>
				<Route  
					exact 
					path={"/"} 
					component={Index}
				/>
				<Route  
					exact 
					path={"/user-profile"} 
					component={UserProfile}
				/>
				<Route  
					exact 
					path={"/add-money-1"} 
					component={AddMoney1}
				/>
				<Route  
					exact 
					path={"/add-money-2"} 
					component={AddMoney2}
				/>
				<Route  
					exact 
					path={"/add-bank"} 
					component={AddBank}
				/>
				<Route  
					exact 
					path={"/add-card"} 
					component={AddCard}
				/>
				<Route  
					exact 
					path={"/confirm-details"} 
					component={ConfirmDetails}
				/>
				<Route  
					exact 
					path={"/exchange"} 
					component={Exchange}
				/>
				<Route
					exact 
					path={"/recent-transaction"} 
					component={RecentTransaction}
				/>
				<Route
					exact 
					path={"/transaction-details"} 
					component={TransactionDetails}
				/>
				<Route
					exact 
					path={"/withdraw"} 
					component={Withdraw}
				/>
				<Route
					exact 
					path={"/transfer"} 
					component={Transfer}
				/>
				<Route
					exact 
					path={"/add-xp-wallet"} 
					component={AddXpWallet}
				/>
				<Route
					exact 
					path={"/recharge-bank"} 
					component={RechargeBank}
				/>
				<Route
					exact 
					path={"/recharge-card"} 
					component={RechargeCard}
				/>
			</Router>
		);
	}
}

export default withRouter(Routes);