import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"


const NewExpense = (props) =>{
    const [formVisible, setFormVisible] = useState(false);
    const expenseFormHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setFormVisible(false)
    }
    
    function showFormHandler(){
        setFormVisible(true)
      }
    
    function hideFormHandler(){
    setFormVisible(false);
    }
    return (
        <div className = "new-expense">
            {!formVisible && <button onClick = {showFormHandler}>Add New Expense</button>}
            {formVisible && <ExpenseForm onSubmitExpenseData = {expenseFormHandler} onHide = {hideFormHandler}></ExpenseForm>}
        </div>
    )
}

export default NewExpense