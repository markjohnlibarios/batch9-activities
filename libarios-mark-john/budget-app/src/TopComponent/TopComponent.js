import '../style.css';

const TopComponent = (props) => {
    const monthYear = () => {
        let newDate = new Date()
        let month = newDate.toLocaleString("en-US", {month: "long"});
        let year = newDate.getFullYear();

        return `${month} ${year}`;
    };

    const balance = (type) => {
        let balance = 0;
        let income = 0;
        let expense = 0;
        let requestTye = 0;

        props.statements.map((statement, index) => {
            const noUnusedExpressions = statement.type === 'inc' ? (
                balance += statement.amount,
                income += statement.amount 
            ) : (
                balance -= statement.amount,
                expense += statement.amount
            );

            return noUnusedExpressions;
            //assign to variable and return to avoid error of no-unused-expressions
        });

        type === 'balance' ? requestTye = balance : type === 'income' ? requestTye = income :  requestTye = expense;

        return requestTye.toLocaleString(undefined, {maximumFractionDigits:2});
    };

    return (
        <div className="top">
            <div className="budget">
                <div className="budget__title">
                    Available Budget in <span className="budget__title--month">{monthYear()}</span>:
                </div>
                
                <div className="budget__value">{balance('balance')}</div>
                
                <div className="budget__income clearfix">
                    <div className="budget__income--text">Income Total</div>
                    <div className="right">
                        <div className="budget__income--value">+ {balance('income')}</div>
                        <div className="budget__income--percentage">&nbsp;</div>
                    </div>
                </div>
                
                <div className="budget__expenses clearfix">
                    <div className="budget__expenses--text">Expenses Total</div>
                    <div className="right clearfix">
                        <div className="budget__expenses--value">- {balance('expense')}</div>
                        <div className="budget__income--percentage">&nbsp;</div>
                        {/* <div className="budget__expenses--percentage">45%</div> */}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TopComponent;