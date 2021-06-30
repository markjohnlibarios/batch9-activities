import { useState } from 'react';
import TopComponent from './TopComponent/TopComponent';
import BottomComponent from './BottomComponent/BottomComponent';

const STATEMENT_ACCOUNT = [
	{
        id: Math.round( Math.random()*1000 ),
		title: "Car Insurance",
        amount: 200,
        type: "exp"
	},
	{
        id: Math.round( Math.random()*1000 ),
		title: "Saving",
        amount: 3000,
        type: "inc"
	},
	{
        id: Math.round( Math.random()*1000 ),
		title: "Computer Insurance",
        amount: 500.36,
        type: "exp"
	},
	{
        id: Math.round( Math.random()*1000 ),
		title: "Phone Insurance",
        amount: 294,
        type: "exp"
	},
];

const App = () => {
    const [statements, setStatement] = useState(STATEMENT_ACCOUNT);
	const addStatementHandler = (newStatement) => {
		setStatement((prevStatements) => {
            return [newStatement, ...prevStatements];
		});
    };
    
    return (
        <>
            <TopComponent
                statements = {statements}
            />
            <BottomComponent
                onAddStatement = {addStatementHandler}
                statements = {statements}
                setStatement = {setStatement}
            />
        </>
    )

};

export default App;