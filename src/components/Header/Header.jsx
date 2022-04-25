import { React } from 'react';
import { getMonth } from '../../services/getMonth';                         /* Imported function for calculating current month and year */
import { Saldo } from '../Saldo/Saldo';
import './Header.css';

export const Header = () => {

    return (
        <div className='header'>
            <p className='text'>Available Budget in {getMonth()}: </p>        {/* Used function for geting current month and year */}
            <Saldo />
        </div>
    )
}