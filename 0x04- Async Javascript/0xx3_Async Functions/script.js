/**
 * ASync 
 * =====
 * keyword: async
 * Keyword: await
 * Async function always return a promise
 * - If the function returns a value, the promise will be rsolved with that value.
 * - If the function throws an execption, the promise wil be rejected.
 */

// async function hello() {}
// } // Automatically returns New Promises

const sing = async () => {
    // throw new Error('Async down')
    throw ('402 Bad Request')
    return 'LA LA LA'
    /**
     * If you throw an eror in aync, The promise is rejected
     * If we throw a valur, Promise is accepted. 
     */
} //fulfiled 'la la la'

sing()
    .then((data) => console.log('Promise resolved eith:', data))
    .catch((err) => console.log('Oh no, Promise rejected:', err))

/** REjecting a promise
 * - By throwing an error into the async function.
 */