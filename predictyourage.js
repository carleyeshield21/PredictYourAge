// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/5aff237c578a14752d0035ae/train/javascript
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    let arr = [age1,age2,age3,age4,age5,age6,age7,age8]
    let sqarr = []
    for(i=0; i<=arr.length-1; i++){
        // console.log(arr[i])
        sqarr.push(arr[i]**2)
    }
    // console.log(sqarr)
    let sum = 0
    for(i=0; i<=sqarr.length-1; i++){
        sum += sqarr[i]
    }
    // console.log(sum)
    console.log(`The predicted age is ${Math.floor(Math.sqrt(sum)/2)}`)
}
predictAge(65, 60, 75, 55, 60, 63, 64, 45)