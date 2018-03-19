export function createLocalStorage() {
  localStorage.setItem('users', JSON.stringify({}));
  localStorage.setItem('books', JSON.stringify({}));
  localStorage.setItem('loggedIn',JSON.stringify({}));
  localStorage.setItem('comments',JSON.stringify({}));
  localStorage.setItem('authors', JSON.stringify({}));

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

export function updateComments(comment) {
  const oldComments = JSON.parse(localStorage.getItem('comments'));
  const newComments = {
    ...oldComments,
    [comment.id]: {
      ...comment
    }
  };
  localStorage.setItem('comments', JSON.stringify(newComments));
}

export function loggedIn(id) {
  const changed = {
    id
  };
  localStorage.setItem('loggedIn',JSON.stringify(changed));
}

export function logOut() {
  localStorage.setItem('loggedIn', JSON.stringify({}));
}

export function updateCountOfLogIn(user) {
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
export function updateAuthor(author) {
  const oldAuthors = JSON.parse(localStorage.getItem('authors'));
  const newAuthors = {
    ...oldAuthors,
    [author.id]: {
      ...author
    }
  };
  localStorage.setItem('authors', JSON.stringify(newAuthors));
}
export function getUsersFromLocalStorage() {
  return JSON.parse(localStorage.getItem('users'));
}

export function getBooksFromLocalStorage() {
  return JSON.parse(localStorage.getItem('books'));
}
export function getCommentsFromLocalStorage() {
  return JSON.parse(localStorage.getItem('comments'));
}

export function getLoggedInFromLocalStorage() {
  return JSON.parse(localStorage.getItem('loggedIn'));
}
export function getAuthorsFromLocaleStorage() {
  return JSON.parse(localStorage.getItem('authors'));
}


