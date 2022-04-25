import React, { useContext, useEffect } from "react";
import { Context } from "../App";
import { Income } from "./Income/Income";
import { Expense } from "./Expense/Expense";

import './TransactionsList.css';

export const TransactionsList = () => {

    const { income, expenses, setIncome, setExpenses } = useContext(Context);

    const deleteIncomeHandler = (e) => {
        let deleteIndex = (parseInt(e.target.id));
        let filteredIncome = income.filter((el, index) => {
            return index !== deleteIndex
        });
        setIncome(filteredIncome);
    };

    const deleteExpenseHandler = (e) => {
       let deleteIndex = parseInt(e.target.id);
       let filteredExpenses = expenses.filter((el, index) => {
           return index !== deleteIndex;
       });
       setExpenses(filteredExpenses);
    }

    return (
        <div className="transactions">
            <div className="incomes">
                <h4>INCOME</h4>
                {income.map((el, index) => <Income key={index} el={el} index={index} deleteIncomeHandler={deleteIncomeHandler} /> )}
            </div>
            <div className="expenses">
                <h4>EXPENSES</h4>
                {expenses.map((el, index) => <Expense key={index} el={el} index={index} deleteExpenseHandler={deleteExpenseHandler} /> )}
            </div>
        </div>
    )
}