import { React } from 'react';
import './SignField.css';

export const SignField = ({onSignChange}) => {
    
    return (
        <select name='sign' className='signField' onChange={onSignChange}>
            <option value='-'>-</option>
            <option value='+'>+</option>
        </select>
    )
}