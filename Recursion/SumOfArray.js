/*/

let i=0;
let result=0;
function sum(nums, result, i ){
   if(i==nums.length) return result
   result+=nums[i];
   i++;
   return sum(nums,result, i)
}
console.log(sum([1,2,3,4,5],result, i))
/*/

// sum of arr from last to 0th element
function sums(arr,n){
    if(n===0) return arr[0];

    return arr[n]+sums(arr,n-1)
}
let arrs=[1,2,3,4,5]
console.log(sums(arrs,arrs.length-1))


//sum of n number

function sumOfNNumber(n){
    if(n==0) return 0;

    return n+sumOfNNumber(n-1)
}
console.log(sumOfNNumber(6))


//sum of odd Number in arr
let arr=[1,3,2,4,5,6,0,9]
function sumOfOdd(n){
    if(n==0) {
        if(arr[n]%2!=0) return arr[n];
        else {
            return 0;
        }
    }
    if(arr[n]%2!=0)
    {
        return arr[n]+sumOfOdd(n-1);
    }else {
        return 0 +sumOfOdd(n-1);
    }    
}


console.log(sumOfOdd(arr.length-1))// 18