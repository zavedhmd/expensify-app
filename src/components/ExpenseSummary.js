import React from 'react';
import expenseTotal from '../selectors/expense-total';
import selectExpenses from '../selectors/expenses';
import { connect } from "react-redux";
import numeral from 'numeral'

export const ExpenseSummary = ({expenseCount, expenseTotal}) => (
    <div>
        <h2>{`Viewing total amount : ${numeral(expenseTotal / 100).format('$0,00.00')}
             and with : ${expenseCount} expenses`}
        </h2>
    </div>
)

const matchStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount : visibleExpenses.length,
        expenseTotal : expenseTotal(visibleExpenses)
    }
}

export default connect(matchStateToProps)(ExpenseSummary);