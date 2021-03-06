import React from "react"
import ExpensesItems from "./Components/ExpensesItems"
import Footer from "./Components/Footer"

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'MacBook', amount: 2799, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <ExpensesItems title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
      <ExpensesItems title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
      <ExpensesItems title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
      <ExpensesItems title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />

      <Footer />
    </div>
  );
}

export default App;
