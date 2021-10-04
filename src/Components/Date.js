import React from 'react'
import "./Date.css"
import ExpensesItems from './ExpensesItems'

const Date = (props) => {
    const month = props.date.toLocaleString('en-US', { month: 'long' })
    const year = props.date.getFullYear()
    const day = props.date.toLocaleString('en-US', { day: '2-digit' })

    return (
        <div className="date_container">
            <p className="expense_date_month">{month}</p>
            <h2 className="expense_date_year">{year}</h2>
            <p className="expense_date_day">{day}</p>
        </div>
    )
}

export default Date
