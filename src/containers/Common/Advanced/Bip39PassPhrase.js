import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {ValidateBip39PassPhrase} from "../../../utils/validations";
import {useTranslation} from "react-i18next";
import {setBip39Passphrase} from "../../../actions/transactions/advanced";
import InputText from "../../../components/InputText";

const Bip39PassPhrase = () => {
    const {t} = useTranslation();
    // const token = useSelector((state) => state.send.token.value);
    const bip39PassPhrase = useSelector((state) => state.advanced.bip39PassPhrase);
    const dispatch = useDispatch();

    const onChange = (evt) => {
        dispatch(setBip39Passphrase({
            value:(evt.target.value*1),
            error:ValidateBip39PassPhrase(evt.target.value)
        }));
    };


    return (
        <div className="form-field">
            <p className="label">{t("BIP_PASSPHRASE")}</p>
            <InputText
                name="delegateAccountNumber"
                placeholder={t("ENTER_BIP_PASSPHRASE")}
                required={false}
                type="password"
                className="form-control"
                value={bip39PassPhrase.value}
                error={bip39PassPhrase.error}
                onChange={onChange}
            />
        </div>
    );
};


export default Bip39PassPhrase;
