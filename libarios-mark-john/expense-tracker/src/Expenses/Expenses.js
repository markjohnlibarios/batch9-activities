import './Expenses.css';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = (props) => {
    // const [year, setYear] = useState("");
    // const filter = (expense) => {
    //     if (!year) {
    //       return true;
    //     } else {
    //       return expense.date.getFullYear() === +year;
    //     }
    // }

    const test = () => {
        alert(123);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter />
                <ExpensesList items={props.expenses}/>
            </Card>
        </div>
    );
}

export default Expenses;
