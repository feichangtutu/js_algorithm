var indexOfSorted = function f(arr, n) {
			var low = 0
			var high = arr.length - 1
			var mid = (low + high) / 2

			while (high - low > 1) {
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
					low = mid
					mid = (low + high) / 2
				}
				if (n < arr[mid]) {
					high = mid
					mid = (low + high) / 2
				}
			}

			return -1
		}

		var sortedArr = [1, 4, 7, 9, 11, 12, 21, 26, 33]

		console.log(indexOfSorted(sortedArr, 12))
