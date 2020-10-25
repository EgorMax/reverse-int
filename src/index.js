module.exports = function reverse(n) {
  if (n < 0) {
    n = -n
    return (n.toString().split('').reverse().join('') * Math.sign(n));
  } else {
    return (n.toString().split('').reverse().join('') * Math.sign(n));
  }
}
