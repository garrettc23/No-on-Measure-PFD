// Capitalizes the first letter of every word for browser tab titles; existing capitals (NO, PFD, FAQ) are kept.
export const titleCase = (text: string) => text.replace(/(^|\s)(\p{Ll})/gu, (_, space, letter) => space + letter.toUpperCase());
