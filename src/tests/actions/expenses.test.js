import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should remove an expense', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});

test('should edit an expense',() => {
    const action = editExpense('123abc', {note: 'New Note Value'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'New Note Value'
        }
    })
});

test('should add an expense with the values provided', () => {
    const expenseData = {
        description: 'For test',
        note : 'For test note',
        amount: 2500,
        createdAt: 10000
        }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
           ...expenseData,
           id: expect.any(String)
        }
    })
})

test('should add an expense with default values', () => {
    const defaultData = {
        description : '',
        note : '',
        amount : 0,
        createdAt : 0
      }
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:
        {
        ...defaultData,
        id: expect.any(String)
    }
    })
});