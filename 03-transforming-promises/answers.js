/**
 * 
 * EXERCISE 1
 * 
 * @param {*} promise 
 * @param {*} transformer 
 * @returns {Promise}
 */
function mapPromise(promise, transformer) {
  return new Promise((resolve, reject) => {
    /* IMPLEMENT ME!! */
    // Resumidamente
    /*
      promise
        .then(result => resolve(transformer(result)))
        .catch(err => reject(err)) 
    */
    promise.then(result => {
      return resolve(transformer(result));
    }).catch(err => {
      return reject(err);
    })
  })
}

/**
 * 
 * EXERCISE 2
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromise(numberPromise) {
  return numberPromise
    .then(data => {
      const number = Number(data)
      if (Number.isNaN(number)) {
        return Promise.reject(`Cannot convert '${data}' to a number!`);
      } else {
        return Math.pow(number, 2);
      }
    }

    );
}

/**
 * EXERCISE 3
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise) {
  return squarePromise(promise)
    .catch(() => {
      return 0;
    });
}

/**
 * EXERCISE 4
 * 
 * @param {Promise} promise 
 * @returns {Promise}
 */
function switcheroo(promise) {
  return new Promise((resolve, reject) => {
    promise.then(success => {
      reject(success);
    })
      .catch(err => {
        return resolve(err);
      });
  })

}

/**
 * @callback consumer
 * @param {*} value
 */

/**
 * @callback handler
 * @param {*} error
 */

module.exports = {
  mapPromise,
  squarePromise,
  squarePromiseOrZero,
  switcheroo,
};