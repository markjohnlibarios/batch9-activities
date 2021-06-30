import '../style.css';
import List from './List';

const ExpenseList = (props) => {
    return (
        <div className="expenses">
            <List
                statement={props.expenseStatement}
                handleDelete={props.handleDelete}
                title="Expense"
                class="expenses__title"
            />
        </div>
    );
};

export default ExpenseList;