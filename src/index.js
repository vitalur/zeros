module.exports = function getZerosCount(number) {
  var first = Math.floor(number / 5);
  var second = Math.floor(first / 5);
  var third = Math.floor(second / 5);
  var four = Math.floor(third / 5);
  var five = Math.floor(four / 5);
  var six = Math.floor(five / 5);
  var seven = Math.floor(six / 5);
  var eight = Math.floor(seven / 5);
  var nine = Math.floor(eight / 5);
  var ten = Math.floor(nine / 5);
  var eleven = Math.floor(ten / 5);
  return first + second + third + four + five + six + seven + eight + nine + ten + eleven;
}
