import './ExpenseFilter.css';

const ExpenseFilter = (props) => {

    /*const handleChange = e => {
        let selectYear = e.target.value;

       alert(selectYear);
    }*/
    const dropDownHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label className="expenses-filter label">Filter by year</label>
                {/* <select className="select" onChange={(e) => props.onChangeFilter(e.target.value)} value={props.selected}> */}
                <select className="select" onChange={dropDownHandler} value={props.selected}>
                    <option value="select">Select Year</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>

                </select>
            </div>
        </div>
    );
};

export default ExpenseFilter;