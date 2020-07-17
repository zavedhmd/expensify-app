import filtersReducer from '../../reducers/filters';
import moment from 'moment';
import { sortByAmount } from '../../actions/filters';

test('should set up default filter values',() => {
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
})

test('shoudl set sortBy to date',() => {
    const currentState = { 
        text : '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const action = {type: 'SORT_BY_DATE'};
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const action = { type: 'SET_TEXT_FILTER', text: 'e'};
    const state = filtersReducer(undefined, action)
    expect(state.text).toBe('e');
});

test('should set up startDate filter', () => {
    const action = { type: 'SET_START_DATE', startDate: moment(0).add(1, 'days').valueOf()}
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toBe(moment(0).add(1, 'days').valueOf())
});

test('should set up endDate filter', () => {
    const action = { type: 'SET_END_DATE', endDate: moment(0).add(1, 'days').valueOf()}
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toBe(moment(0).add(1, 'days').valueOf())
})