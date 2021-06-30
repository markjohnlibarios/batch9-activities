import { useState } from 'react';
import '../style.css';

const List = (props) => {
    const [searchStatement, setSearchStatement] = useState('');
    
    return (
        <div>
            <input
                type="text"
                className="search"
                placeholder={`Search ${props.title}`}
                onChange={e => {setSearchStatement(e.target.value)}}
                onBlur={(e) => {
                        e.target.value = ''
                        setSearchStatement('')
                    }
                }
            />
            <div className="spacer"></div>
            <h2 className={props.class}>{props.title}</h2>
            {!props.statement.length && <h3>No record!</h3>}
            {props.statement.filter((val) => {
                if (searchStatement === '') {
                    return val
                } else if (val.title.toLowerCase().includes(searchStatement.toLowerCase())) {
                    return val
                }
            }).map((item, index) => {
                return (
                    <div className="income__list" key={index}>
                        <div className="item clearfix" id={index}>
                            <div className="item__description">{item.title}</div>
                            <div className="right clearfix">
                                <div className="item__value">+ {item.amount.toLocaleString(undefined, {maximumFractionDigits:2})}</div>
                                <div className="item__delete">
                                    <button className="item__delete--btn" onClick={props.handleDelete.bind(this, item.id)}>
                                        <i className="ion-ios-close-outline"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default List;