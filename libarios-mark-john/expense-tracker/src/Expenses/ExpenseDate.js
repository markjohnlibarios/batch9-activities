import './ExpenseDate.css';

const ExpenseDate = (props) => {
    // const months = [
    //     "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    // ];

    // const month = months[props.date.getMonth()];
    // const date = props.date.getDate();
    // const year = props.date.getFullYear();

    const month = props.date.toLocaleString("en-US", {month: "long"});
    const date = props.date.toLocaleString("en-US", {day: "2-digit"});
    const year = props.date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{date}</div>
            <div className="expense-date__day">{year}</div>
        </div>
    );
};

export default ExpenseDate;