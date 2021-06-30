//import { useState } from 'react';
import '../style.css';
import IncomeList from './IncomeList';
import ExpenseList from './ExpenseList';

const StatementList = (props) => {
    const handleDelete = (itemToDelete) => {
        const newArray = props.statements.filter((item) => item.id !== itemToDelete);
        props.setStatement(newArray);
    };

    return (
        <div className="container clearfix">
            <IncomeList
                incomeStatement = {props.statements.filter((item) => item.type === 'inc')} handleDelete = {handleDelete}
            />
            <ExpenseList
                expenseStatement = {props.statements.filter((item) => item.type === 'exp')}
                handleDelete = {handleDelete}
            />
        </div>
    );
};

export default StatementList;