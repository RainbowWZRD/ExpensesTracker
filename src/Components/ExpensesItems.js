import React from 'react'
import "./ExpensesItems.css"
import Date from "./Date"

const ExpensesItems = (props) => {
    const date = props.date
    const title = props.title
    const amount = props.amount

    return (
        <div className="item_container">
            <div className="expense_container">
                <Date date={props.date} />
                <div className="expense_title">{title}</div>
                <div className="expense_amount">${amount}</div>
            </div>
        </div>
    )
}
export default ExpensesItems
