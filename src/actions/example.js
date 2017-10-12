export const INCREMENT='INCREMENT';
export function increment(value) {
  return {
    type: INCREMENT,
    value
  };
}