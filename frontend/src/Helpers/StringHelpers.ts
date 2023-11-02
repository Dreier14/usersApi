export const spaceWordsWithCapitalLetter = (string: string) => {
    return string.replace(/([A-Z])/g, " $1").trim();
};
