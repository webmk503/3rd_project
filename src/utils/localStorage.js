export function createLocalStorage() {
  localStorage.setItem('users', JSON.stringify({}));
  localStorage.setItem('books', JSON.stringify({}));
  localStorage.setItem('loggedIn',JSON.stringify({}));
}

export function updateUsers(user) {
  const oldUsers = JSON.parse(localStorage.getItem('users'));
  const newUsers = {
    ...oldUsers,
    [user.id]: {
      ...user
    }
  };
  localStorage.setItem('users', JSON.stringify(newUsers));
}

export function updateBooks(book) {
  const oldBooks = JSON.parse(localStorage.getItem('books'));
  const newBooks = {
    ...oldBooks,
    [book.id]: {
      ...book
    }
  };
  localStorage.setItem('users', JSON.stringify(newBooks));
}

export function loggedIn(id) {
  const loggedIn = JSON.parse(localStorage.getItem('loggedIn'));
  const changed = {
    id
  };
  localStorage.setItem('loggedIn',JSON.stringify(changed));
}

export function logOut() {
  localStorage.setItem('loggedIn', JSON.stringify({}));
}

export function countOfLogIn(user) {
  const oldUsers = JSON.parse(localStorage.getItem('users'));
  const newUsers = {
    ...oldUsers,
    [user.id]: {
      ...oldUsers[user.id],
      numberOfLogin: user.adder,
    }
  };
  localStorage.setItem('users', JSON.stringify(newUsers));
}

export function getUsersFromLocalStorage() {
  return JSON.parse(localStorage.getItem('users'));
}

export function getBooksFromLocalStorage() {
  return JSON.parse(localStorage.getItem('books'));
}

export function getLoggedInFromLocalStorage() {
  return JSON.parse(localStorage.getItem('loggedIn'));
}



