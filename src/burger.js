console.log('burger');

// асинхронная операция
function cookBurger (type) { ... }

// обычная операция
function makeMilkshake (type) { ... }

// функция заказа, которая возвращает промис
function order (type) {
  return new Promise(function(resolve, reject) {
    var burger = cookBurger(type)
    burger.ready = function (err, burger) {
      if (err) {
        return reject(Error('Error while cooking'))
      }
      return resolve(burger)
    }
  })
}

order('JakeBurger')
  .then( burger => {
    const milkshake = makeMilkshake('vanila')
    return { burger: burger, shake: milkshake }
  })
  .then( foodItems => {
    console.log('BURGER PARTY !', foodItems)
  })
  .catch( err => {
    console.log(err)
  })