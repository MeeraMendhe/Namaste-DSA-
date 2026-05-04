/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let maxL=[];
    let maxR=[];
    maxL[0]=height[0]
    maxR[height.length-1]=height[height.length-1]
    for(let i=1;i<height.length;i++){
        maxL[i]=Math.max(maxL[i-1],height[i])
    }
    for(let i=height.length-2;i>=0;i--){
        maxR[i]=Math.max(maxR[i+1],height[i])
    }
    let ans=0
    for(let i=0;i<height.length;i++){
        let trapWater=Math.min(maxL[i], maxR[i])-height[i]
        ans+=trapWater<0?0:trapWater
    }
    return ans
};