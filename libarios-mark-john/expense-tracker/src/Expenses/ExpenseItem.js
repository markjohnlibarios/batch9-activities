import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card";

const ExpenseItem = (props) => {
    return (
        <Card className="expense-item">
            <ExpenseDate />
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
                <div className="expense-item__price">$1000,000.00</div>
            </div>
        </Card>
    );
};

export default ExpenseItem;