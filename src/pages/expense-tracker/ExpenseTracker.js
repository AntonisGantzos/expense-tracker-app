import React from 'react'
import { useAddTransaction } from "../../hooks/useAddTransactions"
import { useGetTransaction } from "../../hooks/useGetTransactions"
import { useState } from 'react'
import {useGetUserInfo} from "../../hooks/useGetUserInfo"
import '../../styles/ExpenseTracker.css'
function ExpenseTracker() {
  const {addTransaction} = useAddTransaction() 
  const {transactions} = useGetTransaction()
  const {name, profilePhoto} = useGetUserInfo()
  const [description, setDescription] = useState("")
  const [transactionAmount, setTransactionAmount] = useState(0)
  const [transactionType, setTransactionType] = useState("expense")

  const onSubmit = (e) =>{
    e.preventDefault()
    addTransaction({description, transactionAmount,transactionType})

  }
  return (  
  <>
    <div className='expense-tracker'>
      <div>
        <h1>Expense Tracker</h1>
        <div className='balance'>
          <h3>Your Balance</h3>
          <h2>0.00$</h2>
        </div>
        <div className='summary'>
          <div className='income'>
            <h4>Income</h4>
            <p>0.00$</p>
          </div>
          <div className='expenses'>
            <h4>Expenses</h4>
            <p>0.00$</p>
          </div>
        </div>
        <form className='add-transaction' onSubmit={onSubmit}>
          <input type='text' placeholder='Expense Description' required onChange={(e)=>{setDescription(e.target.value)}}/>
          <input type='number' placeholder='Amount' required onChange={(e)=>{setTransactionAmount(e.target.value)}}/>
          <input type='radio' id='expense' value='expense' checked={transactionType==='expense'} onChange={(e)=>{setTransactionType(e.target.value)}}/>
          <label htmlFor='expense'>Expense</label>
          <input type='radio' id='income' value='income' checked={transactionType==='income'} onChange={(e)=>{setTransactionType(e.target.value)}}/>
          <label htmlFor='income'>Income</label>
          <button type='submit'>Add Transaction</button>
        </form>
      </div>
      {profilePhoto && 
      <div className="profile">
        <img className="profile-photo" src={profilePhoto}/>
        <button>Sign out</button>
      </div>}
    </div>
    <div className='transactions'>
      <h3>Transactions</h3>
      <ul>
        {
        transactions.map((transaction)=>{
          const {description, transactionAmount, transactionType} = transaction
          return(
            <li>
              <h4>
                {description}
              </h4>
              <p>{transactionAmount} Euros · <label style={{color: transactionType === "expense" ? "red" : "green"}}>{transactionType}</label></p>
            </li>
          )

        })}
      </ul>
    </div>
  </>
  )
}

export default ExpenseTracker