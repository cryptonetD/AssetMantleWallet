import React from 'react';
import {Modal as ReactModal} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import { hideValidatorTxModal} from "../../../../store/actions/validators";
import {useTranslation} from "react-i18next";
import Avatar from "../Avatar";
import helper from "../../../../utils/helper";
import {showTxDelegateModal} from "../../../../store/actions/transactions/delegate";
import {showTxReDelegateModal} from "../../../../store/actions/transactions/redelegate";
import {showTxUnbondModal} from "../../../../store/actions/transactions/unbond";
import {showTxWithdrawValidatorRewardsModal} from "../../../../store/actions/transactions/withdrawValidatorRewards";

const ModalValidator = () => {
    const {t} = useTranslation();
    const show = useSelector((state) => state.validators.validatorTxModal);
    const validator = useSelector((state) => state.validators.validator.value);
    console.log(validator, 'validator');
    const dispatch = useDispatch();


    const handleClose = () =>{
        dispatch(hideValidatorTxModal());
    };

    let commissionRate = 0;

    // let commissionRate = helper.decimalConversion(validator.commission.commissionRates.rate) * 100;
    // commissionRate = parseFloat(commissionRate.toFixed(6)).toLocaleString();

    const handleRoute = (tx) =>{
        if(tx === "Delegate"){
            dispatch(hideValidatorTxModal());
            dispatch(showTxDelegateModal());
        }else if(tx === "Redelegate"){
            dispatch(hideValidatorTxModal());
            dispatch(showTxReDelegateModal());
        }else if(tx === "Unbond"){
            dispatch(hideValidatorTxModal());
            dispatch(showTxUnbondModal());
        }else if(tx === "Withdraw"){
            dispatch(hideValidatorTxModal());
            dispatch(showTxWithdrawValidatorRewardsModal());
        }
    };
    return (
        <ReactModal
            animation={false}
            backdrop="static"
            className="actions-modal modal-action"
            centered={true}
            keyboard={false}
            show={show}
            onHide={handleClose}>
            <ReactModal.Body className="actions-modal-body">
                {validator.description &&
                <div className="moniker-box">
                    <Avatar
                        identity={validator.description && validator.description.identity}/>
                    <div className="info">
                        <p className="name">{validator.description && validator.description.moniker}</p>
                        <p className="commission"> {t("COMMISSION")} - {commissionRate}%</p>
                    </div>
                </div>
                }
                {
                    validator.description && validator.description.website !== "" ?
                        <div className="website">
                            <p className="name">{t("WEBSITE")}</p>
                            <p className="value"><a href={validator.description && validator.description.website}
                                rel="noopener noreferrer"
                                target="_blank">{validator.description && validator.description.website}</a>
                            </p>
                        </div>
                        : null
                }
                {
                    validator.description && validator.description.details !== "" ?
                        <div className="description">
                            <p className="name">{t("DESCRIPTION")}</p>
                            <p className="value">{validator.description && validator.description.details}</p>
                        </div>
                        : null
                }
                <div className="buttons-group">
                    <button
                        onClick={() => handleRoute('Delegate')}
                        className="button button-primary">
                        {t("DELEGATE")}
                    </button>

                    <button className="button button-primary"
                        onClick={() => handleRoute('Redelegate')}
                    >{t("REDELEGATE")}
                    </button>
                    <button
                        onClick={() => handleRoute('Unbond')}
                        className="button button-primary">
                        {t("UNBOND")}
                    </button>
                    <button
                        onClick={() => handleRoute('Withdraw')}
                        className="button button-primary">
                        {t("CLAIM_REWARDS")}
                    </button>
                </div>
                {helper.foundationNodeCheck(validator.operatorAddress && validator.operatorAddress) ?
                    <p className="amount-warning text-left"> Warning: Foundation Nodes operate at 100%
                        commission, you will not be receiving any staking rewards.</p> : ""
                }
            </ReactModal.Body>
        </ReactModal>
    );
};

export default ModalValidator;
