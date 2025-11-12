function sort(arr)
{
    if(arr.length==1)
        return arr;
    let mid=Math.floor(arr.length/2)
    let left=sort(arr.slice(0,mid))
    let right=sort(arr.slice(mid))
    return merge(left,right)
}

function merge(arr1,arr2)
{
    let i=0;
    let j=0;
    let sort=[]
    while(i<arr1.length&& j<arr2.length)
    {
        if(arr1[i]<arr2[j])
        {
            sort.push(arr1[i]);
            i++;
        }else
        {
            sort.push(arr2[j]);
            j++
        }
    }
    // if(i<arr1.length)
    // {
    //    for(let k=i;k<arr1.length;k++)
    //    {
    //     sort.push(arr1[k])
    //    }
    // }
    // if(j<arr2.length)
    // {
    //    for(let k=j;k<arr2.length;k++)
    //    {
    //     sort.push(arr2[k])
    //    }
    // }
    //return sort

    return [...sort,...arr1.slice(i), ...arr2.slice(j)]
}


console.log(sort([2,5,7,8,0,6,1,9]))