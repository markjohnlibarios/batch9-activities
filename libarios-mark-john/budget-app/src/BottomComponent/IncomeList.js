import '../style.css';
import List from './List';

const IncomeList = (props) => {
    return (
        <div className="income">
            <List 
                statement={props.incomeStatement}
                handleDelete={props.handleDelete}
                title="Income"
                class="icome__title"
            />
        </div>
    );
};

export default IncomeList;