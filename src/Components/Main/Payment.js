import React, { useContext, useState } from 'react';
import { UserInfo } from './Main';

const Payment = () => {
    const setUserInfo = useContext(UserInfo).info[1]

    const [formInfo, setFormInfo] = useState({})
    const [errorMessage, setErrorMessage] = useState({})
    setUserInfo(formInfo)

    const crossCheck = (valueKey, valueValue, errKey, errValue) => {
        setFormInfo({ ...formInfo, [valueKey]: valueValue })
        setErrorMessage({ ...errorMessage, [errKey]: errValue })
    }
    const getFormInfo = (e) => {
        const name = e.target.name
        const value = e.target.value
        if (name === 'number') {
            value.length === 16 ?
                crossCheck('cardNumber', value, 'cardNumberError', '') :
                crossCheck('cardNumber', '', 'cardNumberError', 'Enter a valid card number. Must be 16 digit')
        }
        else if (name === 'cvc') {
            value >= 4 ?
                crossCheck('cvc', value, 'cvcCheckError', '') :
                crossCheck('cvc', '', 'cvcCheckError', 'Enter a valid CVC. Must be 4 or more digit')
        }
        else if (name === 'post-code') {
            value >= 5 ?
                crossCheck('postCode', value, 'postCodeError', '') :
                crossCheck('postCode', '', 'postCodeError', 'Enter a valid post code. Must be 5 or more digits')
        }
    }

    return (
        <section className="payment">
            <form className="d-flex flex-column">
                <input name="number" type="number" placeholder="Card Number" onBlur={getFormInfo} />
                <span className="error">{errorMessage.cardNumberError}</span>

                <input name="date" type="date" onChange={getFormInfo} />
                <span className="error"></span>

                <input name="cvc" type="number" placeholder="CVC" onBlur={getFormInfo} />
                <span className="error">{errorMessage.cvcCheckError}</span>

                <input name="post-code" type="number" placeholder="Post Code" onBlur={getFormInfo} />
                <span className="error">{errorMessage.postCodeError}</span>

            </form>
        </section>
    );
};

export default Payment;