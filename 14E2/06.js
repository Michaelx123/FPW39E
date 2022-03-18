let arr = [1,2,3,4,5,6]

//let arr = [1,1,1,1,1,1]

let result = true

 

for (let i = 0; i < arr.length; i++ ){

  for (let j = i + 1; j < arr.length; j++){

    if (arr[i]!=arr[j] ){

      result = false

      break;

    }

    if (!result) {

      break;

    }

  }   

}

console.log(result);