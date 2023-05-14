// Names and paths of the sidebar buttons.
export const SIDEBAR_BUTTONS = [
  {
    value: "home",
    path: "/",
  },
  {
    value: "explore",
    path: "/explore",
  },
];

// Capitalizes the first letter of a string.
export const capitalizeFirstLetter = (string) => {
  const firstLetter = string.charAt(0);
  const firstLetterCap = firstLetter.toUpperCase();
  const remainingLetters = string.slice(1);
  const capitalizedText = firstLetterCap + remainingLetters;
  return capitalizedText;
};
