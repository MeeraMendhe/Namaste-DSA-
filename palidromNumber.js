const isPalindrome = function(x) {
    let num=x.toString().split("")
    let str=""
    for(let i=num.length-1;i>=0;i--){
        str+=num[i]
    }
    if(x==str)
    {
        return true
    }
    else
    {
        return false
    }
};

// console.log(isPalindrome(-121))
// console.log(isPalindrome(121))

//Mathematical way

const isPalindromes = function(x) {
    if(x<0)
    {
        return false;
    }

    let remainder=0;
    let value=x;
    let reverse=0
    while(x>0)
    {
        remainder=x%10;
        reverse=10*reverse+remainder;
        x=Math.floor(x/10)
    }
    
    return value===reverse
};

console.log(isPalindromes(-121))
console.log(isPalindromes(10))
console.log(isPalindromes(121))