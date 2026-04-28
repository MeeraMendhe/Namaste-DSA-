/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
    const result = [];

    function backtrack(currentString, openCount, closeCount) {
        // Base case: if string reaches the target length, it's a valid combination
        if (currentString.length === 2 * n) {
            result.push(currentString);
            return;
        }

        // Add an opening bracket if we haven't reached the limit
        if (openCount < n) {
            backtrack(currentString + "(", openCount + 1, closeCount);
        }

        // Add a closing bracket if it won't break the balance
        if (closeCount < openCount) {
            backtrack(currentString + ")", openCount, closeCount + 1);
        }
    }

    backtrack("", 0, 0);
    return result;
}

// Example usage:
console.log(generateParenthesis(3)); 
// Output: ["((()))","(()())","(())()","()(())","()()()"]