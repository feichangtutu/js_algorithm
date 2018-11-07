function deepClone(obj){
	let newObj = {}
	for(let key in obj){
		newObj[key] = obj[key]
		if(typeof(obj[key])=='object'){
			deepClone(obj[key])
		}
	}
	return newObj
}
