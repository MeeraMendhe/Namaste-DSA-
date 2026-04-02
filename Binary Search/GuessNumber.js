var guessNumber = function(n) {
    let r=1
    let l=n-1
    while(r<=l){
        let mid=Math.floor((r+l)/2)
        let res=guess(mid)
        if(res==0){
            return mid
        }else if(res==1){
            r=mid+1
        }else{
            l=mid-1
        }
    }
};