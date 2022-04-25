import { React, useContext, useEffect } from 'react';
import { Context } from '../App';
import './Saldo.css';

export const Saldo = () => {

    const {income, expenses, balance, incomesSum, expensesSum, setBalance, setIncomesSum, setExpensesSum, percent, setPercent, signOfBalance, setSignOfBalance} = useContext(Context);

    useEffect(() => {
        let incomeTotal = 0;
        income.map((el) => {
            incomeTotal += parseFloat(el.ammount);
        });
        setIncomesSum(incomeTotal);
    }, [income]);

    useEffect(() => {
        let expensesTotal = 0;
        expenses.forEach(element => {
            expensesTotal += parseFloat(element.ammount)
        });
        setExpensesSum(expensesTotal);
    }, [expenses]);

    useEffect(() => {
        let p = Math.round((-1 * expensesSum) / incomesSum * 100);
        setPercent(p);
        let b = incomesSum + expensesSum;
        setBalance(b);
        if (b > 0){
            setSignOfBalance('+');
        } else if (b === 0) {
            setSignOfBalance('');
        }
    }, [expensesSum, incomesSum]);

    return (
        <div>
            <p className='saldo'>{signOfBalance}{balance}</p>
            <div className='total'>
            <div className='inc'>
                <span className='incomeText'>INCOME</span>
                <span className='incomeSum'>{incomesSum > 0 ? `+${incomesSum}` : 0}</span>
            </div>
            <div className='expense'>
                <span className='expensesText'>EXPENSES</span>
                <span className='expensesSum'>{expensesSum}</span>
                <span className='percents'>{isFinite(percent) ? percent + '%' : '--%'}</span>
            </div>
            </div>
        </div>
    )
}