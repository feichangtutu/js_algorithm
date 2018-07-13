//二分法，递归查找数组中位置
function indexOfSorted(arr, low, high, n) {
			var mid = parseInt((low + high) / 2)
			if (high === 0) {
				return -1
			}
			if (n === arr[low]) {
				return low
			}
			if (n === arr[high]) {
				return high
			}
			if (n === arr[mid]) {
				return mid
			}
			if (n > arr[mid]) {
				return indexOfSorted(arr, mid, high, n)
			}
			if (n < arr[mid]) {
				return indexOfSorted(arr, 0, mid, n)
			}
		}

		var sortedArr = [1, 4, 7, 9, 11, 12, 21, 26, 33]
		console.log(indexOfSorted(sortedArr, 0, sortedArr.length - 1, 12))
