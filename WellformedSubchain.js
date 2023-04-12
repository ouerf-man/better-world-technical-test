function find_wellformed_subchain(str) {
  let stack = [-1];
  let result = 0;

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == "(") stack.push(i);
    else {
      stack.pop();
      if (stack.length != 0) {
        result = Math.max(result, i - stack[stack.length - 1]);
      }else stack.push(i)
    }
  }
  return result
}

console.log(find_wellformed_subchain(process.argv[2]));
