function countDigit(n){
    let num=n.toString().split("")
    let count=0
    if(num.length===0)
    {
        return -1
    }
    else{
        for(let i=0;i<num.length;i++){
            if(isNaN(Number(num[i])))
            {
                return "Enter the valid Number"
            }
            else{
                count++
            }
        }
    }
    return count
}

//console.log(countDigit("236a"))


//using mathematical way and while loop

function countDigits(num)
{
    if(num===0)
    {
        return 1
    }
    else if(isNaN(num))
    {
        return -1
    }
    //convert the number into positive number
    num=Math.abs(num)
    let count=0
    while(!num==0){
       num=num/10;
       num=Math.floor(num)
    //    console.log(num)
       count++
    }

    return count
}

console.log(countDigits(-1234))