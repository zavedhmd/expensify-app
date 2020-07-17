import expenseReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test('should set default state',() => {
    const state = expenseReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
})

test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
})

test('should add an expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: expenses[0]
    }
    const state = expenseReducer(undefined, action);
    expect(state).toEqual([expenses[0]]);
})

test('should edit a valid expense with id', () => {
    const newExpense = {
        id: '1',
        description: 'Chewing Gum',
        note: '',
        amount: 1250,
        createdAt: 0
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates : {
            description: 'Chewing Gum',
            note: '',
            amount: 1250,
            createdAt: 0
        }
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([newExpense,expenses[1],expenses[2]]);
});

test('should not edit any expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates : {
            description: 'Chewing Gum',
            note: '',
            amount: 1250,
            createdAt: 0
        }
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([...expenses]);
})