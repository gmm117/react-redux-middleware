
const myLogger = store => next => action => {
    console.log(store.getState());
    const result = next(action);
    return result;
};

export default myLogger;

// const myLogger = function middleware(store) {
//     return function (next) {
//         return function (action) {

//         }
//     }
// }
