//then
/*const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    /*
     * Если какое-то условие выполняется, то есть все хорошо,
     * вызываем resolve и получает данные. Условие зависит от задачи.
     */
    /*resolve('Data passed into resolve function :)');

    // Если что-то не так, вызваем reject и передаем ошибку
    // reject("Error passed into reject function :(")
  }, 2000);
});

// Выполнится мгновенно
console.log('BEFORE promise.then');

const onResolve = data => {
  console.log('INSIDE promise.then - onResolve');
  console.log(data); // "Data passed into resolve function :)"
};

const onReject = error => {
  console.log('INSIDE promise.then - onReject');
  console.log(error); // "Error passed into reject function :("
};

promise.then(
  // будет вызвана через 2 секунды, если обещание выполнится успешно
  onResolve,
  // будет вызвана через 2 секунды, если обещание выполнится с ошибкой
  onReject,
);

// Выполнится мгновенно
console.log('AFTER promise.then');


/*
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // Если все ок, то вызывается resolve и передаем данные
    resolve('Data passed into resolve function :)');

    // Если что-то не так, вызваем reject и передаем ошибку
    // reject("Error passed into reject function :(")
  }, 2000);
});

// Выполнится мгновенно
console.log('BEFORE promise.then');

promise.then(
  // Будет вызвана через 2 секунды, если обещание выполнится успешно
  data => {
    console.log('INSIDE promise.then - onResolve');
    console.log(data); // "Data passed into resolve function :)"
  },
  // Будет вызвана через 2 секунды, если обещание выполнится с ошибкой
  error => {
    console.log('INSIDE promise.then - onReject');
    console.log(error); // "Error passed into reject function :("
  },
);

// Выполнится мгновенно
console.log('AFTER promise.then');

//catch
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('There was an error :(');
  }, 2000);
});

/*
 * then не выполнится так как в функции fn, внутри new Promise(fn),
 * был вызван reject(). А catch как раз выполнится через 2 секунды
 */
/*promise
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });

//finally
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success!');
  }, 2000);
});

promise
  .then(data => console.log(data)) // "success"
  .catch(error => console.log(error))
  .finally(() => console.log('finished!')); // "finished"*/

  //Цепочки промисов
/*const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 2000);
});

promise
  .then(value => {
    console.log(value); // 5
    return value * 2;
  })
  .then(value => {
    console.log(value); // 10
    return value * 3;
  })
  .then(value => {
    console.log(value); // 30
  })
  .catch(error => {
    console.log(error);
  });

  //Promise.all()
  const makePromise = (text, delay) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(text), delay);
  });
};

const promiseA = makePromise('promiseA', 1000);
const promiseB = makePromise('promiseB', 3000);

/*
 * Выполнится спустя 3 секунды, когда выполнится второй промис с задержкой в 3c.
 * Первый выполнится через секунду и просто будет готов
 */
/*Promise.all([promiseA, promiseB])
  .then(result => console.log(result)) //["promiseA", "promiseB"]
  .catch(err => console.log(err));
*/

  //Promise.race()
  /*const makePromise = (text, delay) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(text), delay);
  });
};

const promiseA = makePromise('promiseA', 1000);
const promiseB = makePromise('promiseB', 3000);

/*
 * Выполнится спустя 1 секунду, когда выполнится самый быстрый promiseA
 * с задержкой в 1c. Второй промис promiseB будет проигнорирован
 */
/*Promise.race([promiseA, promiseB])
  .then(result => console.log(result)) // "promiseA"
  .catch(err => console.log(err));


  //Promise.resolve()
  const getMessage = function(callback) {
  const input = prompt('Введите сообщение');

  callback(input);
};

const logger = message => console.log(message);

getMessage(logger);*/
//превращается
const getMessage = function() {
  const input = prompt('Введите сообщение');

  return Promise.resolve(input);
};

const logger = message => console.log(message);

getMessage().then(message => logger(message));

// Или еще короче
getMessage().then(logger);