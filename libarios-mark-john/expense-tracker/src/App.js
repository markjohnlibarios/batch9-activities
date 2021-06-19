//import React, { useState } from "react";
import React from "react";
import "./App.css";
import Expenses from "./Expenses/Expenses";

const DUMMY_EXPENSES = [
	{
		title: "Car Insurance",
		amount: "1,000,000.00",
		date: new Date(2020, 5, 3),
	},
	{
		title: "House Insurance",
		amount: "100,000.00",
		date: new Date(2021, 3, 8),
	},
	{
		title: "Computer Insurance",
		amount: "500.00",
		date: new Date(2019, 9, 16),
	},
	{
		title: "Phone Insurance",
		amount: "294.67",
		date: new Date(2022, 11, 28),
	},
];

/*const DUMMY_EXPENSE = {
	title: "Car Insurance",
	amount: "1000000",
	date: new Date(2021, 5, 19)
}*/

const App = () => {
	return (
		<div className="App">
			<Expenses expenses={DUMMY_EXPENSES}/>
		</div>
	);
};

export default App;