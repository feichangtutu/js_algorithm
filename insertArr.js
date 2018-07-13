//二分法，查找数组中位置并按顺序插入
function indexOfSorted(arr, low, high, n) {
			var mid = parseInt((low + high) / 2)
			console.log(mid)
			if (high === 0) {
				arr.splice(0,0,n)
				return arr
			}
			if (n === arr[low]) {
				arr.splice(low,0,n)
console.log('run')          				
				return arr
			}
			if (n === arr[high]) {
				arr.splice(high,0, n)
				return arr
			}
			if (n === arr[mid]) {
				arr.splice(mid,0,n)
				return arr
			}
			if(n< arr[low]){
				arr.splice(low,0,n)
				return arr
			}
			if(n> arr[high]){
				arr.splice(high+1,0,n)
				return arr
			}
			if (n > arr[mid]) {
				if (n < arr[mid+1]){
				  arr.splice(mid+1, 0, n)
                                  return arr
				}else {
					low = mid +1
					console.log("???")
					indexOfSorted(arr, low, high, n)
				}
			}
			if (n < arr[mid]) {
				if (n > arr[mid-1]){
					console.log("here")
					console.log(arr[mid-1])
					arr.splice(mid,0,n)
					return arr
				}else{
					high = mid-1
				     indexOfSorted(arr, low, high, n)
				}	
			}
		}
		var sortedArr = [1, 4, 7, 9, 11, 12, 21, 26, 33]
		indexOfSorted(sortedArr, 0, sortedArr.length - 1, 1)
		console.log(sortedArr)
		console.log(sortArr.indexOf(1))

