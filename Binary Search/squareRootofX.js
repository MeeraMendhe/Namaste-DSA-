var mySqrt = function(x) {
/*/
    //Linear Search
    if(x<2) return x
    let mid=x/2
    let i=1;
    while(i<=mid){
        if(i**2==x||(i+1)**2>x){
            return i
        }else if(i**2<x){
            i++
        }
    }
/*/
 if(x<2) return x
 let l=x/2;
 let r=2;
 let mid
 while(r<=l){
     mid=Math.floor((l+r)/2);
    if(mid**2==x){
        return mid
    }else if(mid**2<x){
        r=mid+1;
    }else{
        l=mid-1
    }
 }
 return mid
};
console.log(mySqrt(14))