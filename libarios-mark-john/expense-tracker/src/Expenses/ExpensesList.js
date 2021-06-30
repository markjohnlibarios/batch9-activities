import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
    // const {title, amount, date} = props.items;

    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    }

    return (
        <ul className="expenses-list">
            {props.items.map((item, index) => (
                <ExpenseItem
                    key={index}
                    title = {item.title}
                    date = {item.date}
                    amount = {item.amount}
                />
            ))}
            {/* <ExpenseItem
                title = {title}
                date = {date}
                amount = {amount}
            /> */}
        </ul>
    );
}

export default ExpensesList;