import { React } from 'react';
import './Ammount.css';

export const Ammount = ({onAmmountChange}) => {

    return (
        <input type='number' className='amountField' name='amount' placeholder='Value' required onChange={onAmmountChange}></input>
    )
}