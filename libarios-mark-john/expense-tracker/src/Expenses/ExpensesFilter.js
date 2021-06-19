import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

    /*const handleChange = e => {
        let selectYear = e.target.value;

       alert(selectYear);
    }*/

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label className="expenses-filter label">Filter by year</label>
                <select className="select" onChange={this.test()}>
                {/* <select
                    className="select"
                    onChange={e => setYear(e.target.value)}
                    value={year}> */}

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

export default ExpensesFilter;