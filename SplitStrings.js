function solution(str) {
  const result = str.match(/.{1,2}/g) ?? []
  const lastElement = result[result.length - 1]
  if (lastElement?.length < 2) {
    result[result.length - 1] = lastElement + "_"
  }
  return result
}
