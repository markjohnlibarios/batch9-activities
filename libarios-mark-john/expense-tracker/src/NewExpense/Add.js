import './Add.css';

const Add = () => {

    //const handleClick = event => event.target.classList.add('hide');
    //const hide = (new-expense__controls)
    const onClickAddHandler = (e) => {
        e.preventDefault();

        const formInputs = document.getElementsByClassName("new-expense__controls")[0];
        formInputs.classList.remove('hide');
        const formButtons = document.getElementsByClassName("new-expense__actions")[0];
        formButtons.classList.remove('hide');


        const addNewExpenseButton = document.getElementsByClassName("add")[0];
        addNewExpenseButton.classList.add('hide');
    };

    return (
        <div className="add">
            <button type="button" onClick={onClickAddHandler}>Add New Expense</button>
        </div>
    );
}

export default Add;