const range = function (start, end, step) {
  if (typeof start === 'undefined' || typeof end === 'undefined' || !step || start > end || step <= 0) {
    return []
  } 
  let result = []
  for (let i = start; i <= end; i += step) {
    result.push(i)
  }
  return result
}

console.log(range(0, 8, 2))