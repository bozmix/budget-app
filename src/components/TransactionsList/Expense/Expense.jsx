import React, { useContext, useState } from "react";
import { Context } from "../../App";

import './Expense.css';

export const Expense = ({ el, index, deleteExpenseHandler }) => {

    const { incomesSum } = useContext(Context);
    const [cN, setCN] = useState('noCross');  

    return(
        <div className={`${(index + 1) % 2 === 0 ? 'even' : 'odd'} exp`} onMouseOver={() => setCN('cross')} onMouseLeave={() => setCN('noCross')}>
            <p>
                <span className="description">{el.description}</span>
                <span className="expensesAmount">{el.ammount}</span>
                <span className="expensesPercent">{incomesSum === 0 ? '--%' : Math.round(-1 * el.ammount / incomesSum * 100)+'%'}</span>
                <span className={`close ${cN}`} ><img id={index} onClick={deleteExpenseHandler} src="https://thumbs.dreamstime.com/b/flat-square-mark-red-icon-button-cross-symbol-isolated-white-background-vector-eps-flat-square-mark-red-icon-button-cross-143476708.jpg" alt="closingCross"/></span>
            </p>
        </div>
    )
}