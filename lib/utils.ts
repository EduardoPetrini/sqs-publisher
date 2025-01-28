/**
 * Function to return a random string of a given length, default length is 10
 */
export const randomString = (length: number = 10): string => {
  return Math.random().toString(36).substring(2, length + 2);
};
