var hasCycle = function(head) {
    const mySet = new Set();
    let flag=false;
    let current=head;
    const set = new Set();
    while(current)
    {
        if(set.has(current))
        {
            flag=true;
            break;
        }
        set.add(current) // set whole node
        current=current.next;
    }
    return flag
    
};