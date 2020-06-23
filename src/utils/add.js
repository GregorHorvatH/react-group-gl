export default function add(x) {
  let value = x; // 1

  function sum(a) {
    if (a === undefined) {
      // console.log(value); // 1
      return value;
    } else {
      value += a; // 1 + 2
      return sum;
    }
  }

  sum.toString = function () {
    return value;
  };

  return sum; // function
}
