import React, { useContext, useState } from 'react';
import { UserInfo } from './Main';

const VerifyYourself = () => {
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
        if (name === 'name') {
            value.length > 5 ?
                crossCheck('name', value, 'nameError', '') :
                crossCheck('name', '', 'nameError', 'Enter a valid name')
        }
        else if (name === 'age-check') {
            value >= 18 ?
                crossCheck('age-check', value, 'ageCheckError', '') :
                crossCheck('age-check', '', 'ageCheckError', 'You are too young to pass')
        }
    }

    return (
        <section className="verify d-flex justify-content-center">
            <form className="d-flex flex-column">
                <input name="name" type="text" placeholder="Enter your Name" onBlur={getFormInfo} />
                <span className="error">{errorMessage.nameError}</span><br />

                <select name="age-check" onChange={getFormInfo}>
                    <option className="d-none">Select Your Age</option>
                    <option value="10">10-17</option>
                    <option value="18">18-25</option>
                    <option value="25">25-40</option>
                    <option value="40">40+</option>
                </select>
                <span className="error">{errorMessage.ageCheckError}</span>
            </form>
        </section>
    );
};

export default VerifyYourself;