module.exports = function getZerosCount(number) {
  	let first = Math.floor(number / 5);
  	let count = first;
	for (let i = 0; i < 11; i++) {
		first = Math.floor(first / 5);
		count += first;
	}
	return count;
}
