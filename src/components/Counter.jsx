import React from 'react';

function Counter({
    number,
    onIncrease,
    onDecrease,
    onIncreaseAsync,
    onDecreaseAsync
}) {
    return (
        <>
            <div>
                <span>{number}</span>
            </div>
            <div>
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
            <div>
                <button onClick={onIncreaseAsync}>+(비동기)</button>
                <button onClick={onDecreaseAsync}>-(비동기)</button>
            </div>
        </>
    );
}

export default Counter;