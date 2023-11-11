const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
		let result = [];
	for(let i = 0; i < arr.length; i++){
		let sum = 0;
        let sub = [];
        for(let j = i; j < arr.length; j++){
            sum += arr[j];
			if(sum == 5 && arr[j] == 0){
				continue;
			}
            if(sum <= n ){
                sub.push(arr[j]);
                i = j;
            }
			
        }
		result.push(sub);
	}
    return result;
};

// const n = prompt("Enter n: ");
// alert(JSON.stringify(divide(arr, n)));
