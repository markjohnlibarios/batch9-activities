import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('render app header', () => {
  render(<App />);
  const header = screen.getByText(/Available Budget in/i);
  expect(header).toBeInTheDocument();
});

test('render income summary', () => {
  render(<App />);
  const incomeSummary = screen.getByText(/Income Total/i);
  expect(incomeSummary).toBeInTheDocument();
});

test('render expense summary', () => {
  render(<App />);
  const expenseSummary = screen.getByText(/Expenses Total/i);
  expect(expenseSummary).toBeInTheDocument();
});

test('render add title placeholder', () => {
  render(<App />);
  const addTitle = screen.getByPlaceholderText(/Add title/i);
  expect(addTitle).toBeInTheDocument();
});

test('render value placeholder', () => {
  render(<App />);
  const value = screen.getByPlaceholderText(/Value/i);
  expect(value).toBeInTheDocument();
});

test('render search for income', () => {
  render(<App />);
  const searchIncome = screen.getByPlaceholderText(/Search Income/i);
  expect(searchIncome).toBeInTheDocument();
});

test('render search for expense', () => {
  render(<App />);
  const searchExpense = screen.getByPlaceholderText(/Search Expense/i);
  expect(searchExpense).toBeInTheDocument();
});

// import { act } from "react-dom/test-utils";
// import { unmountComponentAtNode } from "react-dom";
// import TopComponent from "./TopComponent/TopComponent";

// let container = null;
// beforeEach(() => {
//   // setup a DOM element as a render target
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   // cleanup on exiting
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });

// it("renders with summary", () => {
//   act(() => {
//     render(<TopComponent statements = ""/>, container);
//   });
//   expect(container.textContent).toBe("3,000");
// });