// ❓DESCRIPTION:

// Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// ✅ SOLUTIONS
function solution(str){
    return str.split('').reverse().join('');
}

console.log(solution("dlrow"))