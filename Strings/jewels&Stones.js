var numJewelsInStones = function(jewels, stones) {
    let set=new Set()
    for(let i=0;i<jewels.length;i++){
        if(!set.has(jewels[i])){
            set.add(jewels[i])
        }
    }
    let count=0
    for(let i=0;i<stones.length;i++){
        if(set.has(stones[i])){
            count++
        }
    }
  
   return count
    
};
console.log(numJewelsInStones("aA","aAABBB"))