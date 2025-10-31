// Your code here
// src/utils.js
export function isPalindrome(word) {
  if (typeof word !== "string") {
    throw new Error("Input must be a string");
  }

  if (word === "") return false;

  if (!/^[A-Za-z]+$/.test(word)) {
    throw new Error("Invalid input");
  }

  const normalized = word.toLowerCase();
  const reversed = normalized.split("").reverse().join("");
  return normalized === reversed;
}
