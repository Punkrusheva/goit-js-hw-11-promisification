const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
  return new Promise((resolve, reject) => {
    const updatedUsers = allUsers.map(user =>
      user.name === userName ? { ...user, active: !user.active } : user,
    );
    
    setTimeout(() => {
      if (updatedUsers) {
        resolve(updatedUsers);
      }

      reject(' Error ');
    }, 500);
  });   
};
const logger = updatedUsers => console.table(updatedUsers);

function onToggleUserStateSuccess(result) {
  console.log("onToggleUserStateSuccess");
  console.log(result);
}
  
function onToggleUserState(error) {
  console.log('onToggleUserState');
  console.log(error);
  }

/*
 * Сейчас работает так
 */
//toggleUserState(users, 'Mango', logger);
//toggleUserState(users, 'Lux', logger);

/*
 * Должно работать так
 */
toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);