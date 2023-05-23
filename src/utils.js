// Capitalizes the first letter of a string.
export const capitalizeFirstLetter = (string) => {
  const firstLetter = string.charAt(0);
  const firstLetterCap = firstLetter.toUpperCase();
  const remainingLetters = string.slice(1);
  const capitalizedText = firstLetterCap + remainingLetters;
  return capitalizedText;
};

// Scrolls the window to top.
export const scrollToTop = () => {
  window.scrollTo(0, 0);
};
