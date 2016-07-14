var argArr = process.argv;

var sum = 0;

for (var i = 2; i < argArr.length; i++){
	sum += Number(argArr[i]);
}

console.log(sum);