var maxArea = function(height) {
    let i=0
    let j=height.length-1;
    let ans=0
    while(i!=j){
       ans=Math.max(ans,Math.min(height[i], height[j])*(j-i))
       if(height[i]>height[j]){
        j--
       }else{
        i++
       }
    }
    return ans

};
console.log(maxArea([1,8,6,2,5,4,8,3,7]))