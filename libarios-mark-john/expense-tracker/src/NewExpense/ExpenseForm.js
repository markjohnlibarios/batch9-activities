import { useState } from 'react';
import './ExpenseForm.css';
// import Add from './Add';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const titleChangedHandler = (event) => {
        setEnteredTitle(event.target.value);
        //console.log(enteredTitle);
    };

    const [enteredAmount, setEnteredAmount] = useState("");
    const amountChangedHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const [enteredDate, setEnteredDate] = useState("");
    const dateChangedHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        //to prevent redirection

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        clearField();
    }

    const clearField = () => {
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    // const onClickCancelHandler = (e) => {
    //     e.preventDefault();
    //     clearField();
        
    //     const formInputs = document.getElementsByClassName("new-expense__controls")[0];
    //     formInputs.classList.add('hide');
    //     const formButtons = document.getElementsByClassName("new-expense__actions")[0];
    //     formButtons.classList.add('hide');


    //     const addNewExpenseButton = document.getElementsByClassName("add")[0];
    //     addNewExpenseButton.classList.remove('hide');
    // };

    return (
        <form onSubmit={submitHandler}>
            {/* <Add /> */}
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangedHandler} />
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" minimum="0.01" step="0.01" value={enteredAmount} onChange={amountChangedHandler} />
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-0101" max="2022-12-31" value={enteredDate} onChange={dateChangedHandler} />
                </div>
            </div>

            <div className="new-expense__actions">
                {/* <button type="button" onClick={onClickCancelHandler}>Cancel</button> */}
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;