import { React, useContext, useEffect, useState } from 'react';
import { Ammount } from './Ammount/Ammount';
import { Description } from './Description/Description';
import { SignField } from './SignField/SignField';
import { Context } from '../App';
import './Form.css';


export const Form = () => {
    
    let submitUrlGreen = 'https://icon-library.com/images/check-image-icon/check-image-icon-11.jpg'; //green submit button src
    let submitUrlRed = 'https://t4.ftcdn.net/jpg/04/82/77/81/360_F_482778191_oTR4uFhHrNmbjqgl2RvI8Fvfg8QBPghW.jpg'; //red submit button src
    
    const { sign, setSign, submitUrl, setSubmitUrl, description, setDescription, ammount, setAmmount, expenses, setExpenses, income, setIncome } = useContext(Context);
    
    
    const submitUrlSetter = (s) => {
        s === '-' ? setSubmitUrl(submitUrlRed) : setSubmitUrl(submitUrlGreen);
    } 

    useEffect(() => {
        submitUrlSetter(sign);  //setting src attribute of submit button in dependance of sign state
    },[sign])
    
    const onSignChange = (e) => {
        setSign(e.target.value);
    }

    const onDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const onAmmountChange = (e) => {
        setAmmount(e.target.value);
    };

    useEffect(() => {
        localStorage.setItem('income', JSON.stringify(income));
    }, [income]);

    useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }, [expenses])  

    const submitHandler = () => {
        let exp = JSON.parse(localStorage.getItem('expenses'));
        let inc = JSON.parse(localStorage.getItem('income'));
        if (description !== '' && ammount > 1){
            if (sign === '-'){
                let newExpense = [
                    ...exp,
                    {
                        ammount: -1 * ammount,
                        id: new Date().getTime(),
                        description: description
                    }
                ];
                setExpenses(newExpense);
            } else {
                let newIncome = [
                    ...inc,
                    {
                        ammount: ammount,
                        id: new Date().getTime(),
                        description: description
                    }
                ];
                setIncome(newIncome);
            }
        } 
    }

    return (
        <form className='form'>
           <SignField onSignChange={onSignChange} />
            <Description onDescriptionChange={onDescriptionChange} />
            <Ammount onAmmountChange={onAmmountChange} />
            <input type='image' className='submitButton' name='submit' src={submitUrl} onClick={submitHandler}></input>
        </form>
    )
}