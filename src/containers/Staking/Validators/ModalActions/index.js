import {
    Modal,
} from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import Avatar from "../Avatar";
import helper from "../../../../utils/helper";
import ModalReDelegate from "../ModalReDelegate";
import ModalUnbond from "../ModalUnbond";
import ModalWithdraw from "../ModalWithdraw";
import ModalDelegate from "../ModalDelegate";
import {getDelegationsUrl, getValidatorRewardsUrl} from "../../../../constants/url";
import axios from "axios";

const ModalActions = (props) => {
    const [show, setShow] = useState(true);
    const [txModalShow, setTxModalShow] = useState(false);
    const [initialModal, setInitialModal] = useState(true);
    const [address, setAddress] = useState('');
    const [delegationAmount, setDelegationAmount] = useState('');
    const [moniker, setMoniker] = useState('');
    const [modalDelegate, setModalOpen] = useState();
    const [rewards, setRewards] = useState('');
    const [delegateStatus, setDelegateStatus] = useState(false);
    useEffect(() => {
        console.log(props.validator.operator_address)
        let address = localStorage.getItem('address');
        const fetchValidatorRewards = async () => {
            const url = getValidatorRewardsUrl(address, props.validator.operator_address);
            axios.get(url).then(response => {
                if (response.data.rewards[0].amount) {
                    setRewards((response.data.rewards[0].amount / 1000000).toFixed(6))
                }
            }).catch(error => {
                console.log(error.response
                    ? error.response.data.message
                    : error.message)
            });
            const delegationsUrl = getDelegationsUrl(address);
            axios.get(delegationsUrl).then(response => {
                let delegationResponseList = response.data.delegation_responses;
                for (const item of delegationResponseList) {
                    if (item.delegation.validator_address === props.validator.operator_address) {
                        setDelegationAmount(item.balance.amount / 1000000);
                        setDelegateStatus(true);
                    }
                }
            }).catch(error => {
                console.log(error.response
                    ? error.response.data.message
                    : error.message)
            });
        };
        fetchValidatorRewards();
    }, []);

    const handleClose = () => {
        setShow(false);
        props.setModalOpen('');
    };
    const handleModal = (name, address, validatorMoniker) => {
        setShow(false);
        setInitialModal(false);
        setTxModalShow(true);
        setModalOpen(name);
        setMoniker(validatorMoniker);
        setAddress(address);
    };

    let commissionRate = props.validator.commission.commission_rates.rate * 100;
    commissionRate = parseFloat(commissionRate.toFixed(2)).toLocaleString();
    let active = helper.isActive(props.validator);
    return (

        <>
            {initialModal ?
                <Modal
                    animation={false}
                    centered={true}
                    show={show}
                    className="actions-modal"
                    onHide={handleClose}>

                    <>
                        <Modal.Body className="actions-modal-body">
                            <div className="moniker-box">
                                <Avatar
                                    identity={props.validator.description.identity}/>
                                <div className="info">
                                    <p className="name">{props.validator.description.moniker}</p>
                                    <p className="commission">Commission - {commissionRate}%</p>
                                </div>
                            </div>
                            {
                                props.validator.description.website !== "" ?
                                    <div className="website">
                                        <p className="name">website</p>
                                        <p className="value"><a href={props.validator.description.website}
                                                                rel="noopener noreferrer"
                                                                target="_blank">{props.validator.description.website}</a>
                                        </p>
                                    </div>
                                    : null
                            }
                            {
                                props.validator.description.details !== "" ?
                                    <div className="description">
                                        <p className="name">Description</p>
                                        <p className="value">{props.validator.description.details}</p>
                                    </div>
                                    : null
                            }
                            <div className="buttons-group">

                                {active ?
                                    <button
                                        onClick={() => handleModal('Delegate', props.validator.operator_address, props.validator.description.moniker)}
                                        className="button button-primary">
                                        Delegate
                                    </button>
                                    :
                                    null
                                }
                                <button className="button button-primary"
                                        onClick={() => handleModal('Redelegate', props.validator.operator_address, props.validator.description.moniker)}
                                >Redelegate
                                </button>

                                <button
                                    onClick={() => handleModal('Unbond', props.validator.operator_address, props.validator.description.moniker)}
                                    className="button button-primary">
                                    Unbond
                                </button>
                                {rewards !== ''
                                    ?
                                    <button
                                        onClick={() => handleModal('Withdraw', props.validator.operator_address, props.validator.description.moniker)}
                                        className="button button-primary">
                                        Claim Rewards
                                    </button>
                                    : null}

                            </div>

                        </Modal.Body>
                    </>
                </Modal>
                :
                <Modal
                    animation={false}
                    centered={true}
                    backdrop="static"
                    show={txModalShow}
                    className="modal-custom delegate-modal"
                    onHide={handleClose}>
                    {
                        modalDelegate === 'Delegate' ?
                            <ModalDelegate
                                setTxModalShow={setTxModalShow}
                                setInitialModal={setInitialModal}
                                setShow={setShow}
                                setModalOpen={setModalOpen}
                                validatorAddress={address}
                                moniker={moniker}
                                open={true}
                                handleClose={handleClose}
                            />
                            : null
                    }
                    {
                        modalDelegate === 'Redelegate' ?
                            <ModalReDelegate
                                setTxModalShow={setTxModalShow}
                                setInitialModal={setInitialModal}
                                setShow={setShow}
                                setModalOpen={setModalOpen}
                                validatorAddress={address}
                                moniker={moniker}
                                delegateStatus={delegateStatus}
                                handleClose={handleClose}
                                delegationAmount={delegationAmount}
                            />
                            : null
                    }
                    {
                        modalDelegate === 'Unbond' ?
                            <ModalUnbond
                                setTxModalShow={setTxModalShow}
                                setInitialModal={setInitialModal}
                                setShow={setShow}
                                setModalOpen={setModalOpen}
                                validatorAddress={address}
                                moniker={moniker}
                                delegateStatus={delegateStatus}
                                handleClose={handleClose}
                                delegationAmount={delegationAmount}
                            />
                            : null
                    }
                    {
                        modalDelegate === 'Withdraw' ?
                            <ModalWithdraw
                                setTxModalShow={setTxModalShow}
                                setInitialModal={setInitialModal}
                                setShow={setShow}
                                setModalOpen={setModalOpen}
                                validatorAddress={address}
                                moniker={moniker}
                                rewards={rewards}
                                handleClose={handleClose}
                            />
                            : null
                    }
                </Modal>
            }


        </>
    );
};


export default ModalActions;
