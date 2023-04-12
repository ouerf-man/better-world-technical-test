function test_chain(str) {
  if (!str.length) return false;
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (char == "(") stack.push(char);
    else if (stack.pop() !== "(") return false;
  }
  return stack.length === 0;
}


console.log(test_chain(process.argv[2]));
