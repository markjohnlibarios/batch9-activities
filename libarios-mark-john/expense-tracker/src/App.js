import React, { useState } from "react";
//import React from "react";
import "./App.css";
import Expenses from "./Expenses/Expenses";
import NewExpense from "./NewExpense/NewExpense";

const DUMMY_EXPENSES = [
	{
		title: "Car Insurance",
		amount: "200",
		date: new Date(2020, 5, 3),
	},
	{
		title: "House Insurance",
		amount: "300",
		date: new Date(2021, 3, 8),
	},
	{
		title: "Computer Insurance",
		amount: "500",
		date: new Date(2022, 9, 16),
	},
	{
		title: "Phone Insurance",
		amount: "294",
		date: new Date(2021, 11, 28),
	},
];

/*const DUMMY_EXPENSE = {
	title: "Car Insurance",
	amount: "1000000",
	date: new Date(2021, 5, 19)
}*/

const App = () => {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
	const addExpenseHandler = (expense) => {
		setExpenses((prevExpenses) => {
			return [expense, ...prevExpenses];
		});
	};

	return (
		<div className="App">
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses expenses={expenses}/>
		</div>
	);
};

export default App;