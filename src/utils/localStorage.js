export function createLocalStorage() {
  localStorage.setItem('users', JSON.stringify({}));
  localStorage.setItem('books', JSON.stringify({}));


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

export function getUsersFromLocalStorage() {
  return JSON.parse(localStorage.getItem('users'));
}

export function getBooksFromLocalStorage() {
  return JSON.parse(localStorage.getItem('books'));
}



