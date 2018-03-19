export const getURLbooks = (link) => {
  if(link) {
    return link.split('books/')[1];
  }
  return '';
};

export const getURLchars = (link) => {
  return link.split('characters/')[1];
};
