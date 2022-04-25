import React, { useState } from "react";

import './Income.css';

export const Income = ({ el, index, deleteIncomeHandler}) => {

    const [cN, setCN] = useState('noCross');


    return (
        <div className={`${(index + 1) % 2 === 0 ? 'even' : 'odd'} income`} onMouseOver={() => setCN('cross')} onMouseLeave={() => setCN('noCross')}>
            <p>
                <span className="description">{el.description}</span>
                <span className="incomeAmount">{`+${el.ammount}`}</span>
                <span className={`close ${cN}`} onClick={deleteIncomeHandler}><img id={index} src="https://thumbs.dreamstime.com/b/flat-square-mark-red-icon-button-cross-symbol-isolated-white-background-vector-eps-flat-square-mark-red-icon-button-cross-143476708.jpg" alt="closingCross"/></span>
            </p>
        </div>
    )
}