var preorderTraversal = function(root) {
    //root- left- right
    if(!root) return []
    let ans=[]
    let stack=[root]
    console.log(root)
    while(stack.length){
      let current=stack.pop()
      ans.push(current?.val)
     current.right&& stack.push(current.right)
     current.left&& stack.push(current?.left)
    }
    return ans
};

console.log(preorderTraversal([1,null,2,3]))