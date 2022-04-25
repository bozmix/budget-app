import './App.css';
import { Header } from '../components/Header/Header';
import { Form } from './Form/Form';
import React, { useState } from 'react';
import { TransactionsList } from './TransactionsList/TransactionsList';

export const Context = React.createContext();

function App() {

  const submitUrlRed = 'https://t4.ftcdn.net/jpg/04/82/77/81/360_F_482778191_oTR4uFhHrNmbjqgl2RvI8Fvfg8QBPghW.jpg'; //red submit button src

  let startIncome = JSON.parse(localStorage.getItem('income'));
  
  if (!startIncome){
    startIncome = [];
  }

  let startExpenses = JSON.parse(localStorage.getItem('expenses'));
  
  if(!startExpenses){
    startExpenses = [];
  }

  const [sign, setSign] = useState('-');
  const [submitUrl, setSubmitUrl] = useState(submitUrlRed);
  const [description, setDescription] = useState('');
  const [ammount, setAmmount] = useState(0);
  const [income, setIncome] = useState(startIncome);
  const [expenses, setExpenses] = useState(startExpenses);
  const [balance, setBalance] = useState(0);
  const [incomesSum, setIncomesSum] = useState(0);
  const [expensesSum, setExpensesSum] = useState(0);
  const [percent, setPercent] = useState(0);
  const [signOfBalance, setSignOfBalance] = useState('');

  const contextObject = {
    sign,
    setSign,
    submitUrl,
    setSubmitUrl,
    description,
    setDescription,
    ammount,
    setAmmount,
    income, 
    setIncome,
    expenses,
    setExpenses,
    balance,
    setBalance,
    incomesSum,
    setIncomesSum,
    expensesSum,
    setExpensesSum,
    percent,
    setPercent,
    signOfBalance,
    setSignOfBalance
  };



  return (
    <Context.Provider value={ contextObject }>
      <Header />
      <Form />
      <TransactionsList />
    </Context.Provider>
  );
}

export default App;
