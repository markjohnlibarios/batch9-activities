import { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [isEditing, setEditing] = useState(false);
    const startEditingHandler = () => {
        setEditing(true)
    };

    const stopEditingHandler = () => {
        setEditing(false)
    };

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };

        props.onAddExpense(expenseData);
    };

    // const expenseFormComponent = () => {
    //     const button = () => {
    //         if(!isEditing) {
    //             <button onClick={startEditingHandler}>Add Expense</button>
    //         } else {
    //             <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler} />
    //         }
    //     }
    //         ;
        
    // };

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add Expense</button>}
            {isEditing && <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler} />}
            {/* {button} */}
        </div>
    );
}

export default NewExpense;