import React, { useContext, useState } from 'react';
import { UserInfo } from './Main';

const DetailInfo = () => {
    const [userInfo, setUserInfo] = useContext(UserInfo).info

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
        if (name === 'age') {
            value >= 18 ?
                crossCheck('age', value, 'ageError', '') :
                crossCheck('age', '', 'ageError', 'You must be 18 or above')
        }
        else if (name === 'address') {
            value.length > 5 ?
                crossCheck('address', value, 'addressError', '') :
                crossCheck('address', '', 'addressError', 'Too short address')
        }
    }

    return (
        <section className="detail d-flex justify-content-center">
            <form className="d-flex flex-column">
                <input type="text" value={userInfo.name} readOnly onBlur={getFormInfo} />
                <span className="error"></span>

                <input name="age" type="number" placeholder="Exact Age" onBlur={getFormInfo} />
                <span className="error">{errorMessage.ageError}</span>

                <input name="address" type="text" placeholder="Address" onBlur={getFormInfo} />
                <span className="error">{errorMessage.addressError}</span>

            </form>
        </section>
    );
};

export default DetailInfo;