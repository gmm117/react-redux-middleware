
const myLogger2 = store => next => action => {
    console.log(store.getState());
    const result = next(action);
    return result;
};

export default myLogger2;