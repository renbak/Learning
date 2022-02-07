export default (num) => {
  if (!Array.isArray(num) || num.length === 0) {
    return null;
  }
  const result = num.reduce((a, b) => Math.min(Math.abs(a), Math.abs(b)));
  return result * result;
};
