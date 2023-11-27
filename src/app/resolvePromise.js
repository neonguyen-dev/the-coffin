export default function resolvePromise(prms, promiseState) {
    promiseState.promise = prms;
    promiseState.data = null;
    promiseState.error = null;

    function successACB(result) {
        if (promiseState.promise === prms) {
            promiseState.data = result;
        }
    }

    function failureACB(someError) {
        if (promiseState.promise === prms) {
            promiseState.error = someError;
        }
    }

    if (prms != null) {
        prms.then(successACB).catch(failureACB);
    }
}
