import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Counter from '../components/Counter';
import { increase, decrease, increaseAsync, decreaseAsync } from '../modules/counter';

function CounterContainer() {
    const number = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());

    const onIncreaseAsync = () => dispatch(increaseAsync());
    const onDecreaseAsync = () => dispatch(decreaseAsync());

    return (
        <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} onIncreaseAsync={onIncreaseAsync} onDecreaseAsync={onDecreaseAsync} />
    );
}

export default CounterContainer;