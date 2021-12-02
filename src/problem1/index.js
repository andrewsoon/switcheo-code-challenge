// Summation from 1 to n
var sum_to_n_a = function (n) {
  var sumtoN = 0;
  for (i = 1; i <= n; i++) {
    sumtoN = sumtoN + i;
  }
  return sumtoN;
};
// To test
// sum_to_n_a(5);
// ans = 15

// Summation from n to 1
var sum_to_n_b = function (n) {
  let sumtoN = 0;
  while (n != 0) {
    sumtoN = sumtoN + n;
    n--;
  }
  return sumtoN;
};
// To test
// sum_to_n_b(6);
// ans = 21

// Summation Equation
var sum_to_n_c = function (n) {
  let sumtoN = 0;
  let n1 = n + 1;
  sumtoN = 0.5 * n * n1;
  return sumtoN;
};
// To test
// sum_to_n_c(7);
// ans = 28
