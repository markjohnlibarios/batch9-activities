import { useState } from 'react';
import '../style.css';
import StatementList from './StatementList';

const BottomComponent = (props) => {
    const [isTypeChange, setTypeChange] = useState(false);
    const toggleClass = () => {
        setTypeChange(!isTypeChange);
    };

    const [isAlert, setAlert] = useState(false);
    const toggleAlertClass = () => {
        setAlert(!isAlert);
    };

    const [enteredType, setEnteredType] = useState('inc');
    const typeChangedHandler = (event) => {
        setEnteredType(event.target.value);
        toggleClass();
    };

    const [enteredTitle, setEnteredTitle] = useState("");
    const titleChangedHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const [enteredAmount, setEnteredAmount] = useState("");
    const amountChangedHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const clearField = () => {
        setEnteredType('inc');
        setEnteredTitle('');
        setEnteredAmount('');
    }

    const submitHandler = (event) => {
        event.preventDefault();
        //to prevent redirection

        if (enteredTitle === '' || enteredAmount === '') {
            //alert('Fill-in all the fields!')
            toggleAlertClass();
            return false;
        }

        const transactionData = {
            id: Math.round( Math.random()*1000 ),
            type: enteredType,
            title: enteredTitle,
            amount: parseFloat(enteredAmount),
        };

        props.onAddStatement(transactionData);
        //console.log(props.statements);
        clearField();
    };

    return (
        <div className="bottom">
            <div className="add">
                <div className="add__container">
                {/* alert */}
                <div className={isAlert ? 'alert' : 'alert-hide'}>
                    <span className="closebtn" onClick={toggleAlertClass}>&times;</span>
                    <strong>Error!</strong> Fill all fields.
                </div>
                {/* alert */}
                    <form onSubmit={submitHandler}>
                        <select
                            className={isTypeChange ? 'add__type red-focus' : 'add__type'}
                            onChange={typeChangedHandler}
                            value={enteredType}
                        >
                            <option value="inc">+</option>
                            <option value="exp">-</option>
                        </select>

                        <input
                            type="text"
                            className="add__description"
                            placeholder="Add title"
                            value={enteredTitle}
                            onChange={titleChangedHandler}
                        />

                        <input
                            type="number"
                            className="add__value"
                            placeholder="Value"
                            step="0.1"
                            minimum="0.1"
                            value={enteredAmount}
                            onChange={amountChangedHandler}
                        />

                        <button
                            type="submit"
                            className="add__btn">
                                <i className="ion-ios-checkmark-outline"></i>
                        </button>
                    </form>
                </div>
            </div>

            <StatementList
                statements = {props.statements}
                setStatement = {props.setStatement}
            />

        </div>
    )
};

export default BottomComponent;