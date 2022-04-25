import { React, useContext } from 'react';
import { Context } from '../../App';
import './Description.css';

export const Description = ({onDescriptionChange}) => {


    return (
        <input type='text' className='descriptionText' name='description' size='15' maxLength='50' placeholder='Add description' required onChange={onDescriptionChange}/>
    )
}