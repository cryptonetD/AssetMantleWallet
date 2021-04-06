import React, {useState, useEffect} from "react";
import {connect} from 'react-redux';
import xprt from "../../assets/images/xprt.svg";
import ModalWithdraw from "../Wallet/ModalWithdraw";
import {fetchDelegationsCount} from "../../actions/delegations";
import {fetchBalance} from "../../actions/balance";
import {fetchRewards} from "../../actions/rewards";
import {fetchUnbondDelegations} from "../../actions/unbond";
import {fetchTokenPrice} from "../../actions/tokenPrice";
import ModalSetWithdrawAddress from "../Wallet/ModalSetWithdrawAddress";
import vestingAccount from "../../utils/vestingAmount";
import MakePersistence from "../../utils/cosmosjsWrapper";

const TokenInfo = (props) => {
    const [rewards, setRewards] = useState(false);
    const [withdraw, setWithDraw] = useState(false);
    const [vestingAmount, setVestingAmount] = useState(0);
    const [transferableAmount, setTransferableAmount] = useState(0);
    let address = localStorage.getItem('address');
    useEffect(() => {
        props.fetchDelegationsCount(address);
        props.fetchBalance(address);
        props.fetchRewards(address);
        props.fetchUnbondDelegations(address);
        props.fetchTokenPrice();

    }, []);

    const persistence = MakePersistence(0, 0);
    persistence.getAccounts(address).then(data => {
        const currentEpochTime = Math.floor(new Date().getTime() / 1000);
        if (data.code === undefined) {
            const amount = vestingAccount.getAccountVestingAmount(data.account, currentEpochTime);
            if (props.balance > amount) {
                setVestingAmount(amount)
            } else {
                setVestingAmount(props.balance)
            }

            if ((props.balance - amount) < 0) {
                setTransferableAmount(0);
            } else {
                setTransferableAmount(props.balance - amount);
            }
        }
    });
    const handleRewards = (key) => {
        if (key === "rewards") {
            setRewards(true);
        } else if (key === "setWithDraw") {
            setWithDraw(true);
        }
    };
    return (
        <div className="token-info-section">
            <div className="xprt-info info-box">
                <div className="inner-box">
                    <div className="line">
                        <p className="key">Available amount to delegate</p>
                        <p className="value">
                            {props.balance} XPRT</p>
                    </div>
                    <div className="line">
                        <p className="key">Total Balance</p>
                        <p className="value">{props.delegations + props.balance + props.unbond} XPRT</p>
                    </div>
                    <div className="line">
                        <p className="key">Delegated</p>
                        <p className="value">{props.delegations} XPRT</p>
                    </div>
                </div>
            </div>
            <div className="price-info info-box">
                <div className="inner-box">
                    <div className="line">
                        <p className="key">Current Price</p>
                        <p className="value"> ${props.tokenPrice}</p>
                    </div>
                    <div className="line">
                        <p className="key">Current Value</p>
                        <p className="value">${(props.balance * props.tokenPrice).toFixed(2)}</p>
                    </div>
                    <div className="line">
                        <p className="key">Amount under vesting</p>
                        <p className="value"> {vestingAmount}</p>
                    </div>
                    <div className="line">
                        <p className="key">Transferable Amount</p>
                        <p className="value"> {transferableAmount}</p>
                    </div>
                </div>
            </div>
            <div className="rewards-info info-box">
                <div className="inner-box">
                    <div className="line">
                        <p className="key">Rewards</p>
                        <p className="value rewards" onClick={() => handleRewards("rewards")}><span
                            className="claim">Claim</span></p>
                    </div>
                    <div className="line">
                        <p className="value">{props.rewards} XPRT</p>
                        <p className="value rewards" onClick={() => handleRewards("setWithDraw")}
                           title="Claim your rewards in a separate account."><span className="claim">Set withdraw Address</span>
                        </p>
                    </div>
                    <div className="line">
                        <p className="key">Unbonding Token</p>
                        <p className="value">{props.unbond} XPRT</p>
                    </div>
                </div>
            </div>
            {rewards ?
                <ModalWithdraw setRewards={setRewards} totalRewards={props.rewards}/>
                : null
            }
            {withdraw ?
                <ModalSetWithdrawAddress setWithDraw={setWithDraw} totalRewards={props.rewards}/>
                : null
            }

        </div>
    );
};

const stateToProps = (state) => {
    return {
        delegations: state.delegations.count,
        balance: state.balance.amount,
        rewards: state.rewards.rewards,
        unbond: state.unbond.unbond,
        tokenPrice: state.tokenPrice.tokenPrice
    };
};

const actionsToProps = {
    fetchDelegationsCount,
    fetchBalance,
    fetchRewards,
    fetchUnbondDelegations,
    fetchTokenPrice,
};

export default connect(stateToProps, actionsToProps)(TokenInfo);

