// Given a signed 32-bit integer x, return x with its digits reversed. 
// If reversing x causes the value to go outside the signed 32-bit integer
// range [-231, 231 - 1], then return 0.

const reverse = function(x) {
 
    let num=x;
    let rem=0;
    let reverser=0;
    if(x<0)
    {
        x=Math.abs(x)
    }
    while(x>0)
    {
        rem=x%10;
        reverser=10*reverser+rem;
        x=Math.floor(x/10)
    }
    if(Math.pow(-2,31) > reverser ||reverser> Math.pow(2,31) - 1)
    {
        return 0
    }
    return num<0?-reverser:reverser
};

console.log(reverse(-120))