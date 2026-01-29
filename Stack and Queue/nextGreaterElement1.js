var nextGreaterElement = function(nums1, nums2) {
    let stack=[];
    let obj={}
    for(let i=nums2.length-1;i>=0;i--){
        if(i==nums2.length-1){
            obj[nums2[i]]=-1
           stack.push([nums2[i],-1])
        }else if(nums2[i]<nums2[i+1]){
            stack.push([nums2[i],nums2[i+1]])
            obj[nums2[i]]=nums2[i+1]
        }else{
            let flag=true;
            for(let j=stack.length-1;j>=0;j--){
                if(nums2[i]<stack[j][0]){
                    stack.push([nums2[i],stack[j][0]])
                       obj[nums2[i]]=stack[j][0]
                    flag=false
                }
            }
            if(flag){
                 stack.push([nums2[i],-1])
                    obj[nums2[i]]=-1
            }

        }
    }
    let ans=[]
    for(let i=0;i<nums1.length;i++){
         ans.push(obj[nums1[i]])
    }
    return ans
    
};

//let nums1 = [4,1,2], nums2 = [1,3,4,2];
let nums1 = [2,4], nums2 = [1,2,3,4]
console.log(nextGreaterElement(nums1, nums2))