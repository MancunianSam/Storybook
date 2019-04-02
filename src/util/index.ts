const getStoryOnePage: (currentPage: number, inputText: string) => number = (
  currentPage,
  inputText
) => {
  switch (currentPage) {
    case 2:
      return inputText === 'next' ? ++currentPage : currentPage;
    default:
      return ++currentPage;
  }
};

const getNextPage: (
  story: number,
  currentPage: number,
  inputText: string
) => number = (story, currentPage, inputText) => {
  switch (story) {
    case 1:
      return getStoryOnePage(currentPage, inputText);
    default:
      return currentPage;
  }
};

export { getNextPage };
