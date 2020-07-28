import React from 'react';
import expenseTotal from '../../selectors/expense-total';
import expenses from '../fixtures/expenses'

test('should return 0 for no expense', () => {
    const result = expenseTotal([]);
    expect(result).toBe(0);
});

test('should return correctly for one expense', () => {
    const expense = [{
        id: '2',
        description: 'Rent',
        note: '',
        amount: 109500
    }]
    const result = expenseTotal(expense);
    expect(result).toBe(109500);
});

test('should return 0 for multiple expenses', () => {
    const result = expenseTotal(expenses);
    expect(result).toBe(114195);
});