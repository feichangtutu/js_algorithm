['room','moon','cow jumping over the moon']
	.forEach(
	function(name){
		process.on('exit', function(){
			console.log('good night,'+ name)
		})
	})
